from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import db, migrate, bcrypt, jwt
from app.models.user import User
from app.routes.auth import auth_bp
from app.routes.profile import profile_bp
from app.models.product import Product

def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    app.register_blueprint(auth_bp)
    app.register_blueprint(profile_bp)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)

    @app.route("/")
    def home():
        return {
            "success": True,
            "message": "PulseMetrics Backend Running "
        }

    return app