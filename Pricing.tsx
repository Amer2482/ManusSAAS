import CheckoutButton from "./CheckoutButton";
import { STRIPE_CONFIG } from "@/lib/stripe/config";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 29,
      originalPrice: 39,
      priceId: STRIPE_CONFIG.plans.starter.priceId,
      description: "Perfect for getting started",
      features: [
        "NextJS boilerplate",
        "User authentication",
        "Stripe payments",
        "MongoDB database",
        "Email integration",
        "Basic components",
        "Documentation"
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: 99,
      originalPrice: 149,
      priceId: STRIPE_CONFIG.plans.pro.priceId,
      description: "Most popular choice",
      features: [
        "Everything in Starter",
        "Advanced components",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard",
        "SEO optimization",
        "Lifetime updates"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 199,
      originalPrice: 299,
      priceId: STRIPE_CONFIG.plans.enterprise.priceId,
      description: "For growing businesses",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom development",
        "Dedicated support",
        "SLA guarantee",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include lifetime access.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? "ring-2 ring-blue-600 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${plan.originalPrice}
                  </span>
                </div>
                <p className="text-gray-600">One-time payment</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <CheckoutButton
                priceId={plan.priceId}
                planName={plan.name}
                price={plan.price}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : `Get ${plan.name}`}
              </CheckoutButton>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include lifetime access and updates. No recurring fees.
          </p>
          <p className="text-gray-600">
            30-day money-back guarantee. Questions?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;