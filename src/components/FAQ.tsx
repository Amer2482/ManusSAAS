const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the package?",
      answer: "You get a complete NextJS boilerplate with authentication, payments, database integration, and all essential components to launch your SaaS quickly."
    },
    {
      question: "Do I get lifetime updates?",
      answer: "Yes! All plans include lifetime updates. You'll receive new features, bug fixes, and improvements as they're released."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase."
    },
    {
      question: "Can I use this for multiple projects?",
      answer: "Yes, you can use the boilerplate for unlimited personal and commercial projects."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide email support for all customers. Pro and Enterprise plans include priority support with faster response times."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our SaaS boilerplate
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;