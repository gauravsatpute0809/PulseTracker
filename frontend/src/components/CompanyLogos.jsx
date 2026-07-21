function CompanyLogos() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Adobe",
    "Spotify",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center text-gray-500 font-semibold uppercase tracking-widest">
          Trusted by Leading Companies
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-gray-50 rounded-xl py-6 text-center font-bold text-gray-600 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              {company}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;