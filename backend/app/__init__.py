from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import db, migrate, bcrypt, jwt


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)

    @app.route("/")
    def home():
        return {
            "success": True,
            "message": "PulseMetrics Backend Running 🚀"
        }

    return app