from flask import Blueprint, request, jsonify
from sqlalchemy import func

from app.extensions import db
from app.models.order import Order

order_bp = Blueprint("order", __name__)


# ==========================================
# Add Order
# ==========================================
@order_bp.route("/orders", methods=["POST"])
def add_order():

    data = request.get_json()

    customer_name = data.get("customer_name")
    product_name = data.get("product_name")
    quantity = data.get("quantity")
    total_price = data.get("total_price")
    status = data.get("status", "Pending")
    order_date = data.get("order_date")

    if (
        not customer_name
        or not product_name
        or quantity is None
        or total_price is None
        or not order_date
    ):
        return jsonify({
            "success": False,
            "message": "All fields are required."
        }), 400

    order = Order(
        customer_name=customer_name,
        product_name=product_name,
        quantity=quantity,
        total_price=total_price,
        status=status,
        order_date=order_date,
    )

    db.session.add(order)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Order added successfully.",
        "order": order.to_dict()
    }), 201


# ==========================================
# Get Orders
# ==========================================
@order_bp.route("/orders", methods=["GET"])
def get_orders():

    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 10, type=int)

    pagination = (
        Order.query
        .order_by(Order.id.desc())
        .paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )
    )

    return jsonify({
        "success": True,
        "orders": [
            order.to_dict()
            for order in pagination.items
        ],
        "page": pagination.page,
        "per_page": pagination.per_page,
        "total": pagination.total,
        "pages": pagination.pages,
        "has_next": pagination.has_next,
        "has_prev": pagination.has_prev
    })

# ==========================================
# Update Order
# ==========================================
@order_bp.route("/orders/<int:id>", methods=["PUT"])
def update_order(id):

    order = Order.query.get(id)

    if not order:
        return jsonify({
            "success": False,
            "message": "Order not found."
        }), 404

    data = request.get_json()

    order.customer_name = data.get("customer_name", order.customer_name)
    order.product_name = data.get("product_name", order.product_name)
    order.quantity = data.get("quantity", order.quantity)
    order.total_price = data.get("total_price", order.total_price)
    order.status = data.get("status", order.status)
    order.order_date = data.get("order_date", order.order_date)

    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Order updated successfully.",
        "order": order.to_dict()
    }), 200
    
# ==========================================
# Delete Order
# ==========================================
@order_bp.route("/orders/<int:id>", methods=["DELETE"])
def delete_order(id):

    order = Order.query.get(id)

    if not order:
        return jsonify({
            "success": False,
            "message": "Order not found."
        }), 404

    db.session.delete(order)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Order deleted successfully."
    }), 200
    
# ==========================================
# Order Summary API
# ==========================================
@order_bp.route("/orders/summary", methods=["GET"])
def order_summary():

    total_orders = Order.query.count()

    completed_orders = Order.query.filter(
        Order.status == "Completed"
    ).count()

    pending_orders = Order.query.filter(
        Order.status == "Pending"
    ).count()
    cancelled_orders = Order.query.filter(
    Order.status == "Cancelled"
    ).count()

    total_sales = db.session.query(
        func.coalesce(func.sum(Order.total_price), 0)
    ).scalar()

    return jsonify({
    "success": True,
    "summary": {
        "total_orders": total_orders,
        "completed_orders": completed_orders,
        "pending_orders": pending_orders,
        "cancelled_orders": cancelled_orders,
        "total_sales": total_sales
    }
}), 200