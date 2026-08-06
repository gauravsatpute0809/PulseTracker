from app.extensions import db
from app.models.notification import Notification


def create_notification(title, message):
    notification = Notification(
        title=title,
        message=message
    )

    db.session.add(notification)
    db.session.commit()