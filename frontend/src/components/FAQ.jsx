import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is there a free plan available?",
    answer:
      "Yes. Our Starter plan is completely free and includes core dashboard and analytics features.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan anytime without losing your data.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. We provide a 14-day money-back guarantee for Professional subscriptions.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. We use industry-standard encryption, secure cloud infrastructure, and regular backups to protect your data.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes. Starter users receive community support, while Professional and Enterprise customers receive priority support.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to know about PulseMetrics.
          </p>
        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;