const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Launch Your SaaS?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who've already shipped their SaaS using our template. 
          Stop wasting time on boilerplate and start building what matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get SaaSFast Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            View Live Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">5 min</div>
            <div className="text-blue-100">Setup Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-blue-100">Happy Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">30 days</div>
            <div className="text-blue-100">Money-back Guarantee</div>
          </div>
        </div>

        <p className="text-blue-100 text-sm mt-8">
          No recurring fees • Lifetime updates • Full source code
        </p>
      </div>
    </section>
  );
};

export default CTA;

