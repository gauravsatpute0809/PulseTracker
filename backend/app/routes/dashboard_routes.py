from flask import Blueprint
from app.models.product import Product
from app.models.customer import Customer
from app.models.order import Order

dashboard_bp = Blueprint(
    "dashboard",
    __name__
)


@dashboard_bp.route("/dashboard/summary", methods=["GET"])
def dashboard_summary():

    total_products = Product.query.count()

    total_customers = Customer.query.count()

    total_orders = Order.query.count()

    total_revenue = (
        sum(order.total_price for order in Order.query.all())
        if total_orders > 0
        else 0
    )

    return {
        "success": True,
        "data": {
            "products": total_products,
            "customers": total_customers,
            "orders": total_orders,
            "revenue": total_revenue
        }
    }, 200