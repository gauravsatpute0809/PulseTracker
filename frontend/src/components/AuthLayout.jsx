function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-100">
      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-12">
        <h1 className="text-5xl font-extrabold mb-6">
          PulseMetrics
        </h1>

        <p className="text-xl text-orange-100 text-center max-w-md leading-relaxed">
          AI-Powered Business Intelligence Platform for modern businesses.
        </p>

        <div className="mt-16">
          <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-white/20 flex items-center justify-center">
              <div className="text-7xl">📊</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            {subtitle}
          </p>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;