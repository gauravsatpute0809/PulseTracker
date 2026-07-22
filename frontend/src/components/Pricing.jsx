import { useState } from "react";
import { FaCheck, FaCrown, FaBolt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ComparisonTable from "./ComparisonTable";
import TrustBadges from "./TrustBadges";


function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      audience: "Best for Students",
      monthly: "Free",
      yearly: "Free",
      description:
        "Perfect for students, freelancers, and personal projects.",
      features: [
        "Basic Dashboard",
        "Real-Time Analytics",
        "5 Reports / Month",
        "CSV Export",
        "Community Support",
      ],
      featured: false,
    },
    {
      name: "Professional",
      audience: "Best for Startups",
      monthly: "$29",
      yearly: "$24",
      description:
        "Ideal for startups and growing businesses with AI-powered analytics.",
      features: [
        "Unlimited Dashboards",
        "AI Insights",
        "Unlimited Reports",
        "CSV & PDF Export",
        "Priority Support",
        "API Access",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      audience: "Best for Large Organizations",
      monthly: "Custom",
      yearly: "Custom",
      description:
        "Enterprise-grade solution with advanced security and dedicated support.",
      features: [
        "Everything in Professional",
        "Unlimited Users",
        "Dedicated Account Manager",
        "Enterprise Security",
        "Custom Integrations",
        "24/7 Premium Support",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Pricing
          </span>

          <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Choose the perfect plan for your business. Upgrade anytime as your
            company grows.
          </p>

        </div>

        {/* Billing Toggle */}

        <div className="flex justify-center mt-12">

          <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 border">

            <button
              onClick={() => setBilling("monthly")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                billing === "monthly"
                  ? "bg-orange-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                billing === "yearly"
                  ? "bg-orange-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly
            </button>

            <div className="ml-3 bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <FaBolt />
              Save 20%
            </div>

          </div>

        </div>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                plan.featured
                  ? "bg-gradient-to-b from-orange-50 to-white border-2 border-orange-500 shadow-2xl scale-105"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >

              {/* Badge */}

              {plan.featured && (

                <div className="absolute -top-5 left-1/2 -translate-x-1/2">

                  <div className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">

                    <FaCrown />

                    Most Popular

                  </div>

                </div>

              )}

              {/* Audience */}

              <p className="text-orange-500 uppercase tracking-widest font-semibold">

                {plan.audience}

              </p>

              {/* Plan */}

              <h3 className="text-3xl font-bold mt-3">

                {plan.name}

              </h3>

              {/* Price */}

              <div className="mt-6">

                <span className="text-5xl font-extrabold">

                  {billing === "monthly"
                    ? plan.monthly
                    : plan.yearly}

                </span>

                {plan.monthly !== "Free" &&
                  plan.monthly !== "Custom" && (

                    <span className="text-gray-500 text-lg">

                      /month

                    </span>

                  )}

              </div>

              <p className="mt-5 text-gray-600 leading-7">

                {plan.description}

              </p>

              <hr className="my-8" />

              {/* Features */}

              <div className="space-y-4">

                {plan.features.map((feature) => (

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

              {plan.name === "Enterprise" ? (

                <button className="mt-10 w-full py-4 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-semibold">

                  Schedule Demo

                </button>

              ) : (

                <Link
                  to="/register"
                  className={`mt-10 w-full py-4 rounded-xl flex justify-center items-center gap-3 font-semibold transition ${
                    plan.featured
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >

                  Get Started

                  <FaArrowRight />

                </Link>

              )}

              {/* Footer */}

              <p className="text-center text-sm text-gray-500 mt-5">

                {plan.name === "Enterprise"
                  ? "Talk with our sales team."
                  : "No credit card required"}

              </p>

            </div>

          ))}

        </div>

        {/* Trust Badges */}

        {/* Comparison Table */}
<div className="mt-24">
  <ComparisonTable />
</div>

{/* Trust Badges */}
<div className="mt-20">
  <TrustBadges />
</div>

      </div>
    </section>
  );
}

export default Pricing;