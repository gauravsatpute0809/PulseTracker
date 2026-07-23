from app.extensions import db, bcrypt
from app.models.user import User
from flask_jwt_extended import create_access_token

def register_user(data):

    full_name = data.get("full_name")
    email = data.get("email")
    password = data.get("password")

    if not full_name or not email or not password:
        return {
            "success": False,
            "message": "All fields are required."
        }, 400

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return {
            "success": False,
            "message": "Email already exists."
        }, 409

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    user = User(
        full_name=full_name,
        email=email,
        password=hashed_password
    )

    db.session.add(user)
    db.session.commit()

    return {
        "success": True,
        "message": "User registered successfully."
    }, 201
    
    
    


def login_user(data):

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return {
            "success": False,
            "message": "Email and password are required."
        }, 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return {
            "success": False,
            "message": "Invalid email or password."
        }, 401

    if not bcrypt.check_password_hash(user.password, password):
        return {
            "success": False,
            "message": "Invalid email or password."
        }, 401

    access_token = create_access_token(identity=str(user.id))

    return {
        "success": True,
        "message": "Login successful.",
        "access_token": access_token,
        "user": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email,
            "role": user.role
        }
    }, 200