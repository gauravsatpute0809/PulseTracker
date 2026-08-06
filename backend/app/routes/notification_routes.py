from flask import Blueprint, jsonify
from app.models.notification import Notification
from app.extensions import db

notification_bp = Blueprint("notification", __name__)


# =====================================
# Get All Notifications
# =====================================
@notification_bp.route("/notifications", methods=["GET"])
def get_notifications():

    notifications = (
        Notification.query
        .order_by(Notification.created_at.desc())
        .all()
    )

    return jsonify({
        "success": True,
        "data": [n.to_dict() for n in notifications]
    })


# =====================================
# Mark Notification as Read
# =====================================
@notification_bp.route("/notifications/<int:id>/read", methods=["PUT"])
def mark_as_read(id):

    notification = Notification.query.get_or_404(id)

    notification.is_read = True

    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Notification marked as read"
    })