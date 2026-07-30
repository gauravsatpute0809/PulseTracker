from flask import Blueprint, jsonify, request

from app.extensions import db
from app.models.setting import Setting

settings_bp = Blueprint("settings", __name__)


# ==========================================
# Get Settings
# ==========================================
@settings_bp.route("/settings", methods=["GET"])
def get_settings():

    setting = Setting.query.first()

    if not setting:
        setting = Setting(
            company_name="PulseMetrics",
            email="admin@pulsemetrics.com",
            phone="+91 9876543210",
            website="https://pulsemetrics.com",
            address="India",
            theme="Light",
            email_notifications=True,
            push_notifications=True,
            sms_notifications=False,
            marketing_notifications=False,
        )

        db.session.add(setting)
        db.session.commit()

    return jsonify({
        "success": True,
        "settings": setting.to_dict()
    }), 200


# ==========================================
# Update Settings
# ==========================================
@settings_bp.route("/settings", methods=["PUT"])
def update_settings():

    setting = Setting.query.first()

    if not setting:
        return jsonify({
            "success": False,
            "message": "Settings not found."
        }), 404

    data = request.get_json()

    setting.company_name = data.get(
        "company_name",
        setting.company_name
    )

    setting.email = data.get(
        "email",
        setting.email
    )

    setting.phone = data.get(
        "phone",
        setting.phone
    )

    setting.website = data.get(
        "website",
        setting.website
    )

    setting.address = data.get(
        "address",
        setting.address
    )

    setting.theme = data.get(
        "theme",
        setting.theme
    )

    setting.email_notifications = data.get(
        "email_notifications",
        setting.email_notifications
    )

    setting.push_notifications = data.get(
        "push_notifications",
        setting.push_notifications
    )

    setting.sms_notifications = data.get(
        "sms_notifications",
        setting.sms_notifications
    )

    setting.marketing_notifications = data.get(
        "marketing_notifications",
        setting.marketing_notifications
    )

    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Settings updated successfully.",
        "settings": setting.to_dict()
    }), 200