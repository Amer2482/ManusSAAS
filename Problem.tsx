const Problem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stop Wasting Time on Boilerplate Code
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a SaaS from scratch takes months of development time. We've done the heavy lifting so you can focus on your unique value proposition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-900 mb-6">
              😤 The Old Way
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                <span className="text-red-800">Months of setup and configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                <span className="text-red-800">Complex authentication systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                <span className="text-red-800">Payment integration headaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                <span className="text-red-800">Database design and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                <span className="text-red-800">Email service configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                <span className="text-red-800">Deployment and hosting setup</span>
              </li>
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              🚀 The SaaSFast Way
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-green-800">Launch in 5 minutes with our template</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-green-800">Pre-built authentication with NextAuth</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-green-800">Stripe payments ready to go</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-green-800">MongoDB integration included</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-green-800">Email templates and automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-green-800">One-click deployment to Vercel</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of developers who've already shipped their SaaS
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Building Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;

