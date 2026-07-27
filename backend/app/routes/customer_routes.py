from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.customer import Customer
from sqlalchemy import func

customer_bp = Blueprint("customer", __name__)


# ==========================================
# Add Customer
# ==========================================
@customer_bp.route("/customers", methods=["POST"])
def add_customer():

    data = request.get_json()

    full_name = data.get("full_name")
    email = data.get("email")
    phone = data.get("phone")
    city = data.get("city")
    status = data.get("status", "Active")

    if not full_name or not email or not phone or not city:
        return jsonify({
            "success": False,
            "message": "All fields are required."
        }), 400

    existing = Customer.query.filter_by(email=email).first()

    if existing:
        return jsonify({
            "success": False,
            "message": "Email already exists."
        }), 400

    customer = Customer(
        full_name=full_name,
        email=email,
        phone=phone,
        city=city,
        status=status
    )

    db.session.add(customer)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Customer added successfully.",
        "customer": customer.to_dict()
    }), 201
    
# ==========================================
# Get Customers (Pagination)
# ==========================================
@customer_bp.route("/customers", methods=["GET"])
def get_customers():

    page = request.args.get("page", default=1, type=int)
    per_page = request.args.get("per_page", default=10, type=int)

    pagination = Customer.query.order_by(
        Customer.id.desc()
    ).paginate(
        page=page,
        per_page=per_page,
        error_out=False
    )

    return jsonify({
        "success": True,
        "customers": [
            customer.to_dict()
            for customer in pagination.items
        ],
        "page": pagination.page,
        "per_page": pagination.per_page,
        "total": pagination.total,
        "pages": pagination.pages,
        "has_next": pagination.has_next,
        "has_prev": pagination.has_prev
    }), 200
    
# ==========================================
# Update Customer
# ==========================================
@customer_bp.route("/customers/<int:id>", methods=["PUT"])
def update_customer(id):

    customer = Customer.query.get(id)

    if not customer:
        return jsonify({
            "success": False,
            "message": "Customer not found."
        }), 404

    data = request.get_json()

    customer.full_name = data.get("full_name", customer.full_name)
    customer.email = data.get("email", customer.email)
    customer.phone = data.get("phone", customer.phone)
    customer.city = data.get("city", customer.city)
    customer.status = data.get("status", customer.status)

    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Customer updated successfully.",
        "customer": customer.to_dict()
    }), 200
    
# ==========================================
# Delete Customer
# ==========================================
@customer_bp.route("/customers/<int:id>", methods=["DELETE"])
def delete_customer(id):

    customer = Customer.query.get(id)

    if not customer:
        return jsonify({
            "success": False,
            "message": "Customer not found."
        }), 404

    db.session.delete(customer)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Customer deleted successfully."
    }), 200
    
# ==========================================
# Customer Summary API
# ==========================================
@customer_bp.route("/customers/summary", methods=["GET"])
def customer_summary():

    total_customers = Customer.query.count()

    active_customers = Customer.query.filter(
        Customer.status == "Active"
    ).count()

    inactive_customers = Customer.query.filter(
        Customer.status != "Active"
    ).count()

    cities = db.session.query(
        func.count(func.distinct(Customer.city))
    ).scalar()

    return jsonify({
        "success": True,
        "summary": {
            "total_customers": total_customers,
            "active_customers": active_customers,
            "inactive_customers": inactive_customers,
            "cities": cities
        }
    }), 200