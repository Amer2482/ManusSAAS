"use client";

import { useState } from "react";
import Image from "next/image";

const FeaturesAccordion = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "🔐",
      title: "Authentication & User Management",
      description: "Complete user authentication system with NextAuth.js, supporting Google OAuth, magic links, and secure session management.",
      image: "/images/feature-auth.png",
      details: [
        "✓ Google OAuth integration",
        "✓ Magic link authentication", 
        "✓ Secure session management",
        "✓ User profile management",
        "✓ Password reset functionality"
      ]
    },
    {
      icon: "💳",
      title: "Stripe Payment Integration",
      description: "Ready-to-use Stripe integration with subscription billing, one-time payments, and webhook handling for secure transactions.",
      image: "/images/feature-payments.png",
      details: [
        "✓ Subscription billing",
        "✓ One-time payments",
        "✓ Webhook handling",
        "✓ Customer portal",
        "✓ Invoice management"
      ]
    },
    {
      icon: "📧",
      title: "Email Automation",
      description: "Automated email workflows with Resend integration, including welcome emails, password resets, and marketing campaigns.",
      image: "/images/feature-analytics.png",
      details: [
        "✓ Welcome email sequences",
        "✓ Password reset emails",
        "✓ Marketing campaigns",
        "✓ Transactional emails",
        "✓ Email templates"
      ]
    },
    {
      icon: "🗄️",
      title: "Database & Analytics",
      description: "MongoDB integration with user models, analytics tracking, and comprehensive dashboard for monitoring your SaaS metrics.",
      image: "/images/feature-analytics.png",
      details: [
        "✓ MongoDB integration",
        "✓ User data models",
        "✓ Analytics tracking",
        "✓ Performance metrics",
        "✓ Data visualization"
      ]
    },
    {
      icon: "🎨",
      title: "UI Components & Styling",
      description: "Beautiful, responsive components built with Tailwind CSS and daisyUI, ready to customize for your brand.",
      image: "/hero-dashboard.png",
      details: [
        "✓ Tailwind CSS styling",
        "✓ Responsive design",
        "✓ Dark mode support",
        "✓ Custom components",
        "✓ Brand customization"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Launch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete SaaS starter kit with all the features you need
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature list */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  activeFeature === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {feature.description}
                    </p>
                    
                    {activeFeature === index && (
                      <div className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-gray-700">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Feature image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Feature #{activeFeature + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;

