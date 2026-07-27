from app.extensions import db


class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)

    full_name = db.Column(db.String(150), nullable=False)

    email = db.Column(
        db.String(150),
        unique=True,
        nullable=False,
    )

    phone = db.Column(
        db.String(20),
        nullable=False,
    )

    city = db.Column(
        db.String(100),
        nullable=False,
    )

    status = db.Column(
        db.String(20),
        default="Active",
    )

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "phone": self.phone,
            "city": self.city,
            "status": self.status,
            "created_at": self.created_at,
        }