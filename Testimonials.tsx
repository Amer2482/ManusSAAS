"use client";

import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder at DataFlow",
      company: "DataFlow Analytics",
      content: "SaaSFast saved me 3 months of development time. I was able to launch my analytics platform in just 2 weeks instead of spending months on boilerplate code.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO at TechStart",
      company: "TechStart Solutions",
      content: "The code quality is exceptional. Everything is well-documented and follows best practices. Our team was productive from day one.",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Solo Developer",
      company: "Freelancer",
      content: "As a solo developer, SaaSFast gave me the foundation I needed to compete with larger teams. The authentication and payment systems work flawlessly.",
      avatar: "EJ"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "InnovateLab",
      content: "We've built 3 different SaaS products using SaaSFast. It's our go-to template for rapid prototyping and MVP development.",
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Startup Founder",
      company: "GrowthHack Pro",
      content: "The Stripe integration alone saved us weeks of work. Everything just works out of the box. Highly recommended for any SaaS founder.",
      avatar: "LT"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join 1,000+ developers who've launched their SaaS with our template
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16">
          <p className="text-center text-gray-600 mb-8">
            Trusted by developers at leading companies
          </p>
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">TechCorp</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">StartupLab</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">InnovateCo</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">DevStudio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

