from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import db, migrate, bcrypt, jwt

# Models
from app.models.user import User
from app.models.product import Product

# Blueprints
from app.routes.auth import auth_bp
from app.routes.profile import profile_bp
from app.routes.product_routes import product_bp


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    # Initialize Extensions
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Register Blueprints
    app.register_blueprint(auth_bp, url_prefix="/api")
    app.register_blueprint(profile_bp, url_prefix="/api")
    app.register_blueprint(product_bp, url_prefix="/api")

    @app.route("/")
    def home():
        return {
            "success": True,
            "message": "PulseMetrics Backend Running 🚀"
        }

    return app