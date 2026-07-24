from app.extensions import db
from datetime import datetime


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(150), nullable=False)

    category = db.Column(db.String(100), nullable=False)

    price = db.Column(db.Float, nullable=False)

    stock = db.Column(db.Integer, nullable=False)

    status = db.Column(
        db.String(20),
        default="Active"
    )

    description = db.Column(
        db.Text
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "price": self.price,
            "stock": self.stock,
            "status": self.status,
            "description": self.description,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }