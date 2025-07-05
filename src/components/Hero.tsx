"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Launch Your SaaS in{" "}
              <span className="text-blue-600">Minutes</span>, Not Months
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Skip the boring setup and focus on what matters. SaaSFast gives you everything you need to build, launch, and scale your SaaS business.
            </p>
            
            {/* Social Proof */}
            <p className="text-sm text-gray-500 mb-8">
              Trusted by 1,000+ developers worldwide
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started Now
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">SaaS Dashboard</h3>
                  <p className="text-gray-600">Beautiful, responsive interface</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ✓ Ready to Deploy
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ⚡ Lightning Fast
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;