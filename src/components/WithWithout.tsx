const WithWithout = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SaaSFast vs. Building From Scratch
          </h2>
          <p className="text-xl text-gray-600">
            See the difference our template makes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Without SaaSFast */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="text-2xl font-bold text-red-900">Without SaaSFast</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900">3-6 months development</h4>
                  <p className="text-red-700 text-sm">Setting up authentication, payments, database, email, and deployment</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900">$50,000+ in development costs</h4>
                  <p className="text-red-700 text-sm">Hiring developers or spending your own time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900">Countless bugs and issues</h4>
                  <p className="text-red-700 text-sm">Security vulnerabilities, payment failures, email deliverability</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900">Missed market opportunities</h4>
                  <p className="text-red-700 text-sm">While you're building, competitors are shipping</p>
                </div>
              </div>
            </div>
          </div>

          {/* With SaaSFast */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-green-900">With SaaSFast</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">5 minutes to launch</h4>
                  <p className="text-green-700 text-sm">Clone, configure, and deploy your SaaS instantly</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">$99 one-time cost</h4>
                  <p className="text-green-700 text-sm">Save thousands in development costs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Battle-tested code</h4>
                  <p className="text-green-700 text-sm">Used by 1000+ developers, thoroughly tested and secure</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">First to market advantage</h4>
                  <p className="text-green-700 text-sm">Launch fast and capture your market</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            The choice is clear. Start building your SaaS today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get SaaSFast Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WithWithout;

