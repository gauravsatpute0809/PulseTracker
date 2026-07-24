from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.product import Product

product_bp = Blueprint("product", __name__)


@product_bp.route("/products", methods=["POST"])
def add_product():
    data = request.get_json()

    name = data.get("name")
    category = data.get("category")
    price = data.get("price")
    stock = data.get("stock")
    status = data.get("status", "Active")
    description = data.get("description")

    # Validation
    if not name or not category or price is None or stock is None:
        return jsonify({
            "success": False,
            "message": "All required fields must be filled."
        }), 400

    # Create Product
    product = Product(
        name=name,
        category=category,
        price=price,
        stock=stock,
        status=status,
        description=description,
    )

    db.session.add(product)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Product added successfully",
        "product": product.to_dict()
    }), 201