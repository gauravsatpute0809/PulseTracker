from flask import Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.user import User

profile_bp = Blueprint(
    "profile",
    __name__,
    url_prefix="/api/profile"
)


@profile_bp.route("/", methods=["GET"])
@jwt_required()
def get_profile():

    user_id = get_jwt_identity()

    user = User.query.get(user_id)

    if not user:
        return {
            "success": False,
            "message": "User not found."
        }, 404

    return {
        "success": True,
        "user": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email,
            "role": user.role,
            "profile_image": user.profile_image,
            "is_verified": user.is_verified
        }
    }, 200