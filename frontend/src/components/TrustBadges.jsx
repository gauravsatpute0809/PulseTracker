import {
  FaLock,
  FaHeadset,
  FaBolt,
  FaCreditCard,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";

const badges = [
  {
    icon: <FaCreditCard />,
    title: "No Credit Card",
    description: "Start free with no payment required.",
  },
  {
    icon: <FaLock />,
    title: "Enterprise Security",
    description: "Industry-standard encryption & protection.",
  },
  {
    icon: <FaBolt />,
    title: "99.9% Uptime",
    description: "Reliable cloud infrastructure.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Expert help whenever you need it.",
  },
  {
    icon: <FaShieldAlt />,
    title: "GDPR Ready",
    description: "Built with privacy and compliance.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Hosted",
    description: "Fast, scalable and secure deployment.",
  },
];

function TrustBadges() {
  return (
    <section className="mt-20">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {badges.map((badge) => (

          <div
            key={badge.title}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">

              {badge.icon}

            </div>

            <h3 className="text-xl font-bold mt-6">

              {badge.title}

            </h3>

            <p className="text-gray-500 mt-3 leading-7">

              {badge.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TrustBadges;