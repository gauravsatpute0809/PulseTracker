from flask import Blueprint, jsonify, send_file, request
from sqlalchemy import func, extract
from datetime import datetime
import io
import pandas as pd

from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib import colors

from app.extensions import db
from app.models.order import Order
from app.models.customer import Customer
from app.models.product import Product

report_bp = Blueprint("report", __name__)

# ==========================================
# Reports Summary API
# ==========================================
@report_bp.route("/reports/summary", methods=["GET"])
def reports_summary():

    total_orders = Order.query.count()
    total_customers = Customer.query.count()
    total_products = Product.query.count()

    total_sales = db.session.query(
        func.coalesce(func.sum(Order.total_price), 0)
    ).scalar()

    return jsonify({
        "success": True,
        "summary": {
            "total_orders": total_orders,
            "total_customers": total_customers,
            "total_products": total_products,
            "total_sales": float(total_sales)
        }
    }), 200


# ==========================================
# Monthly Sales API
# ==========================================
@report_bp.route("/reports/monthly-sales", methods=["GET"])
def monthly_sales():

    sales = (
        db.session.query(
            extract("month", Order.order_date).label("month"),
            func.sum(Order.total_price).label("revenue")
        )
        .group_by(extract("month", Order.order_date))
        .order_by(extract("month", Order.order_date))
        .all()
    )

    months = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
    ]

    result = []

    for item in sales:
        result.append({
            "month": months[int(item.month) - 1],
            "revenue": float(item.revenue)
        })

    return {
        "success": True,
        "data": result
    }, 200


# ==========================================
# Top Selling Products
# ==========================================
@report_bp.route("/reports/top-products", methods=["GET"])
def top_products():

    products = (
        db.session.query(
            Order.product_name,
            func.sum(Order.quantity).label("quantity")
        )
        .group_by(Order.product_name)
        .order_by(func.sum(Order.quantity).desc())
        .limit(5)
        .all()
    )

    result = []

    for product in products:
        result.append({
            "name": product.product_name,
            "value": int(product.quantity)
        })

    return {
        "success": True,
        "data": result
    }, 200


# ==========================================
# Recent Orders
# ==========================================
@report_bp.route("/reports/recent-orders", methods=["GET"])
def recent_orders():

    orders = (
        Order.query
        .order_by(Order.id.desc())
        .limit(5)
        .all()
    )

    return {
        "success": True,
        "data": [order.to_dict() for order in orders]
    }, 200


# ==========================================
# Export Excel Report
# ==========================================
@report_bp.route("/reports/export/excel", methods=["GET"])
def export_excel():

    output = io.BytesIO()

    with pd.ExcelWriter(output, engine="openpyxl") as writer:

        # Summary
        total_orders = Order.query.count()
        total_customers = Customer.query.count()
        total_products = Product.query.count()

        total_sales = db.session.query(
            func.coalesce(func.sum(Order.total_price), 0)
        ).scalar()

        summary_df = pd.DataFrame({
            "Metric": [
                "Total Orders",
                "Total Customers",
                "Total Products",
                "Total Sales"
            ],
            "Value": [
                total_orders,
                total_customers,
                total_products,
                total_sales
            ]
        })

        summary_df.to_excel(
            writer,
            sheet_name="Summary",
            index=False
        )

        # Monthly Sales
        monthly = (
            db.session.query(
                func.extract("month", Order.order_date).label("month"),
                func.sum(Order.total_price).label("sales")
            )
            .group_by(func.extract("month", Order.order_date))
            .all()
        )

        month_names = {
            1:"Jan",2:"Feb",3:"Mar",4:"Apr",
            5:"May",6:"Jun",7:"Jul",8:"Aug",
            9:"Sep",10:"Oct",11:"Nov",12:"Dec"
        }

        monthly_df = pd.DataFrame([
            {
                "Month": month_names[int(row.month)],
                "Sales": row.sales
            }
            for row in monthly
        ])

        monthly_df.to_excel(
            writer,
            sheet_name="Monthly Sales",
            index=False
        )

        # Top Products
        products = (
            db.session.query(
                Order.product_name,
                func.sum(Order.quantity).label("qty")
            )
            .group_by(Order.product_name)
            .order_by(func.sum(Order.quantity).desc())
            .all()
        )

        product_df = pd.DataFrame([
            {
                "Product": p.product_name,
                "Quantity Sold": p.qty
            }
            for p in products
        ])

        product_df.to_excel(
            writer,
            sheet_name="Top Products",
            index=False
        )

        # Recent Orders
        orders = (
            Order.query
            .order_by(Order.id.desc())
            .all()
        )

        order_df = pd.DataFrame([
            {
                "Customer": o.customer_name,
                "Product": o.product_name,
                "Quantity": o.quantity,
                "Price": o.total_price,
                "Status": o.status,
                "Date": str(o.order_date)
            }
            for o in orders
        ])

        order_df.to_excel(
            writer,
            sheet_name="Recent Orders",
            index=False
        )

    output.seek(0)

    return send_file(
        output,
        download_name="PulseMetrics_Report.xlsx",
        as_attachment=True,
        mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    
@report_bp.route("/reports/export/pdf", methods=["GET"])
def export_pdf():

    buffer = io.BytesIO()

    pdf = SimpleDocTemplate(buffer)

    data = [
        ["Metric", "Value"],
        ["Total Orders", Order.query.count()],
        ["Total Customers", Customer.query.count()],
        ["Total Products", Product.query.count()],
        [
            "Total Sales",
            db.session.query(
                func.coalesce(func.sum(Order.total_price), 0)
            ).scalar()
        ]
    ]

    table = Table(data)

    table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), colors.orange),
        ("TEXTCOLOR", (0,0), (-1,0), colors.white),

        ("GRID", (0,0), (-1,-1), 1, colors.black),

        ("BACKGROUND", (0,1), (-1,-1), colors.beige),

        ("ALIGN", (0,0), (-1,-1), "CENTER")
    ]))

    pdf.build([table])

    buffer.seek(0)

    return send_file(
        buffer,
        download_name="PulseMetrics_Report.pdf",
        as_attachment=True,
        mimetype="application/pdf"
    )
    
# ==========================================
# Filter Summary API
# ==========================================
@report_bp.route("/reports/filter-summary", methods=["GET"])
def filter_summary():

    start = request.args.get("start")
    end = request.args.get("end")

    query = Order.query

    if start and end:
        start_date = datetime.strptime(start, "%Y-%m-%d").date()
        end_date = datetime.strptime(end, "%Y-%m-%d").date()

        query = query.filter(
            Order.order_date.between(start_date, end_date)
        )

    total_orders = query.count()

    total_sales = (
        query.with_entities(
            func.coalesce(func.sum(Order.total_price), 0)
        ).scalar()
    )

    return {
        "success": True,
        "data": {
            "orders": total_orders,
            "sales": float(total_sales or 0),
        },
    }, 200
    
@report_bp.route("/reports/dashboard-summary", methods=["GET"])
def dashboard_summary():

    total_revenue = (
        db.session.query(func.sum(Order.total_price)).scalar() or 0
    )

    total_orders = Order.query.count()

    total_products = Product.query.count()

    total_customers = Customer.query.count()

    return {
        "success": True,
        "data": {
            "revenue": total_revenue,
            "orders": total_orders,
            "products": total_products,
            "customers": total_customers,
        },
    }, 200