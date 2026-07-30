from app.extensions import db


class Setting(db.Model):
    __tablename__ = "settings"

    id = db.Column(db.Integer, primary_key=True)

    company_name = db.Column(
        db.String(150),
        nullable=False
    )

    email = db.Column(
        db.String(150),
        nullable=False
    )

    phone = db.Column(
        db.String(30),
        nullable=False
    )

    website = db.Column(
        db.String(150),
        nullable=True
    )

    address = db.Column(
        db.Text,
        nullable=True
    )

    theme = db.Column(
        db.String(20),
        default="Light"
    )

    email_notifications = db.Column(
        db.Boolean,
        default=True
    )

    push_notifications = db.Column(
        db.Boolean,
        default=True
    )

    sms_notifications = db.Column(
        db.Boolean,
        default=False
    )

    marketing_notifications = db.Column(
        db.Boolean,
        default=False
    )

    def to_dict(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "email": self.email,
            "phone": self.phone,
            "website": self.website,
            "address": self.address,
            "theme": self.theme,
            "email_notifications": self.email_notifications,
            "push_notifications": self.push_notifications,
            "sms_notifications": self.sms_notifications,
            "marketing_notifications": self.marketing_notifications,
        }