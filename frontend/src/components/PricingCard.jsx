import { FaCheck, FaCrown, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function PricingCard({
  name,
  price,
  description,
  features,
  featured,
  audience,
}) {
  return (
    <div
      className={`relative rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
        featured
          ? "border-2 border-orange-500 shadow-2xl bg-gradient-to-b from-orange-50 to-white scale-105"
          : "border border-gray-200 bg-white shadow-lg"
      }`}
    >
      {/* Most Popular Badge */}
      {featured && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg">
            <FaCrown />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8">

        {/* Audience */}
        <p className="text-orange-500 font-semibold uppercase tracking-wider">
          {audience}
        </p>

        {/* Plan Name */}
        <h3 className="text-3xl font-bold mt-3">
          {name}
        </h3>

        {/* Price */}
        <div className="mt-6">

          <span className="text-5xl font-extrabold">
            {price}
          </span>

          {price !== "Free" && price !== "Custom" && (
            <span className="text-gray-500 text-lg">
              /month
            </span>
          )}

        </div>

        {/* Description */}
        <p className="mt-5 text-gray-600 leading-7">
          {description}
        </p>

        {/* Divider */}
        <hr className="my-8" />

        {/* Features */}
        <div className="space-y-4">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheck className="text-green-600 text-sm" />
              </div>

              <span className="text-gray-700">
                {feature}
              </span>
            </div>
          ))}

        </div>

        {/* Button */}
        {name === "Enterprise" ? (
          <button className="mt-10 w-full py-4 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-semibold">
            Schedule Demo
          </button>
        ) : (
          <Link
            to="/register"
            className={`mt-10 w-full py-4 rounded-xl flex justify-center items-center gap-3 font-semibold transition ${
              featured
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            Get Started
            <FaArrowRight />
          </Link>
        )}

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          {name === "Enterprise"
            ? "Talk with our sales team."
            : "No credit card required"}
        </p>

      </div>
    </div>
  );
}

export default PricingCard;