from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions import db, bcrypt
from app.models.user import User

import os

print("✅ PROFILE.PY LOADED")
print("FILE:", os.path.abspath(__file__))


profile_bp = Blueprint(
    "profile",
    __name__
)


# ==========================================
# Get Profile
# ==========================================
@profile_bp.route("/", methods=["GET"])
@jwt_required()
def get_profile():

    user = User.query.get(int(get_jwt_identity()))

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


# ==========================================
# Update Profile
# ==========================================
@profile_bp.route("/", methods=["PUT"])
@jwt_required()
def update_profile():

    user = User.query.get(int(get_jwt_identity()))

    if not user:
        return {
            "success": False,
            "message": "User not found."
        }, 404

    data = request.get_json()

    user.full_name = data.get("full_name", user.full_name)
    user.email = data.get("email", user.email)

    db.session.commit()

    return {
        "success": True,
        "message": "Profile updated successfully.",
        "user": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email,
            "role": user.role,
            "profile_image": user.profile_image,
            "is_verified": user.is_verified
        }
    }, 200


# ==========================================
# Change Password
# ==========================================
@profile_bp.route("/change-password", methods=["PUT"])
@jwt_required()
def change_password():

    user = User.query.get(int(get_jwt_identity()))

    if not user:
        return {
            "success": False,
            "message": "User not found."
        }, 404

    data = request.get_json()

    current_password = data.get("current_password")
    new_password = data.get("new_password")

    if not bcrypt.check_password_hash(user.password, current_password):
        return {
            "success": False,
            "message": "Current password is incorrect."
        }, 400

    user.password = bcrypt.generate_password_hash(
        new_password
    ).decode("utf-8")

    db.session.commit()

    return {
        "success": True,
        "message": "Password changed successfully."
    }, 200