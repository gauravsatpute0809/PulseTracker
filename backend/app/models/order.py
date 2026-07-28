from app.extensions import db


class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)

    customer_name = db.Column(
        db.String(120),
        nullable=False
    )

    product_name = db.Column(
        db.String(120),
        nullable=False
    )

    quantity = db.Column(
        db.Integer,
        nullable=False
    )

    total_price = db.Column(
        db.Float,
        nullable=False
    )

    status = db.Column(
        db.String(30),
        default="Pending"
    )

    order_date = db.Column(
        db.Date,
        nullable=False
    )

    def to_dict(self):
        return {
            "id": self.id,
            "customer_name": self.customer_name,
            "product_name": self.product_name,
            "quantity": self.quantity,
            "total_price": self.total_price,
            "status": self.status,
            "order_date": str(self.order_date)
        }