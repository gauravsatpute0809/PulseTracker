function CTA() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Transform Your Business?
        </h2>

        <p className="text-slate-300 mt-6 text-xl">
          Join thousands of businesses using PulseMetrics to make
          data-driven decisions with confidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
            Start Free Trial
          </button>

          <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition">
            Schedule Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;