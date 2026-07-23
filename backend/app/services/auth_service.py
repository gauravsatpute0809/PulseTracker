from app.extensions import db, bcrypt
from app.models.user import User


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