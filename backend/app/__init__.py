from flask import Flask
from flask_cors import CORS
from flask import send_from_directory

from app.config import Config
from app.extensions import db, migrate, bcrypt, jwt

# Models
from app.models.user import User
from app.models.product import Product
from app.models.setting import Setting

# Blueprints
from app.routes.auth import auth_bp
from app.routes.profile import profile_bp
from app.routes.product_routes import product_bp
from app.routes.customer_routes import customer_bp
from app.routes.order_routes import order_bp
from app.routes.report_routes import report_bp
from app.routes.settings_routes import settings_bp

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(
        app,
        resources={r"/api/*": {"origins": "http://localhost:5173"}},
        supports_credentials=True,
    )

    # Initialize Extensions
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Register Blueprints
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(profile_bp, url_prefix="/api/profile")
    app.register_blueprint(product_bp, url_prefix="/api")
    app.register_blueprint(customer_bp, url_prefix="/api")
    app.register_blueprint(order_bp, url_prefix="/api")
    app.register_blueprint(report_bp, url_prefix="/api")
    app.register_blueprint(settings_bp, url_prefix="/api")
    
    @app.route("/")
    def home():
        return {
            "success": True,
            "message": "PulseMetrics Backend Running 🚀",
        }
    @app.route("/uploads/<filename>")
    def uploaded_file(filename):
        return send_from_directory(
            
            app.config["UPLOAD_FOLDER"],
            filename
        )

    print("\n========== REGISTERED ROUTES ==========")
    for rule in app.url_map.iter_rules():
     print(f"{rule.endpoint:30} -> {rule}")
     print("=======================================\n")

    return app