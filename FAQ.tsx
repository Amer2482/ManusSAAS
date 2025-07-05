"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What exactly do I get with SaaSFast?",
      answer: "You get a complete Next.js SaaS template with authentication, payments, database integration, email automation, and all the components you need to launch your SaaS. Plus lifetime updates and comprehensive documentation."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Basic knowledge of React/Next.js is helpful, but our template is designed to be beginner-friendly. We provide detailed documentation and video tutorials to help you customize everything."
    },
    {
      question: "What technologies are included?",
      answer: "Next.js 14, NextAuth.js, Stripe, MongoDB, Tailwind CSS, daisyUI, Resend/Mailgun for emails, and deployment ready for Vercel. Everything is modern and production-ready."
    },
    {
      question: "Can I customize the design and features?",
      answer: "Absolutely! The template is fully customizable. You can modify colors, layouts, add new features, and make it completely your own. The code is clean and well-documented."
    },
    {
      question: "Is there ongoing support?",
      answer: "Yes! You get lifetime updates to the template and access to our community Discord. Pro and Enterprise plans include priority support."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with SaaSFast, we'll refund your purchase, no questions asked."
    },
    {
      question: "How quickly can I launch my SaaS?",
      answer: "With SaaSFast, you can have a working SaaS deployed in under 5 minutes. Customization time depends on your specific needs, but most developers launch within a few days."
    },
    {
      question: "Do you provide deployment help?",
      answer: "Yes! We include step-by-step deployment guides for Vercel, and our documentation covers everything from environment variables to custom domains."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SaaSFast
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

