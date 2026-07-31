from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions import db, bcrypt
from app.models.user import User
from flask import current_app
from werkzeug.utils import secure_filename
import uuid

import os

print("✅ PROFILE.PY LOADED")
print("FILE:", os.path.abspath(__file__))
def allowed_file(filename):
    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower()
        in current_app.config["ALLOWED_EXTENSIONS"]
    )


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

    if not current_password or not new_password:
        return {
            "success": False,
            "message": "Both passwords are required."
        }, 400

    # Verify current password
    if not bcrypt.check_password_hash(user.password, current_password):
        return {
            "success": False,
            "message": "Current password is incorrect."
        }, 400

    # Prevent same password
    if bcrypt.check_password_hash(user.password, new_password):
        return {
            "success": False,
            "message": "New password must be different from current password."
        }, 400

    # Update password
    user.password = bcrypt.generate_password_hash(
        new_password
    ).decode("utf-8")

    db.session.commit()

    return {
        "success": True,
        "message": "Password changed successfully."
    }, 200
    
# ==========================================
# Upload Profile Image
# ==========================================
@profile_bp.route("/upload-image", methods=["POST"])
@jwt_required()
def upload_profile_image():

    user = User.query.get(int(get_jwt_identity()))

    if not user:
        return {
            "success": False,
            "message": "User not found."
        }, 404

    if "image" not in request.files:
        return {
            "success": False,
            "message": "No image selected."
        }, 400

    file = request.files["image"]

    if file.filename == "":
        return {
            "success": False,
            "message": "Please choose an image."
        }, 400

    if not allowed_file(file.filename):
        return {
            "success": False,
            "message": "Only PNG, JPG, JPEG and WEBP images are allowed."
        }, 400

    extension = file.filename.rsplit(".", 1)[1].lower()

    filename = f"{uuid.uuid4()}.{extension}"

    upload_folder = current_app.config["UPLOAD_FOLDER"]

    os.makedirs(upload_folder, exist_ok=True)

    filepath = os.path.join(upload_folder, filename)

    file.save(filepath)

    user.profile_image = filename

    db.session.commit()

    return {
    "success": True,
    "message": "Profile image uploaded successfully.",
    "image": user.profile_image
}, 200