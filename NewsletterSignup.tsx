"use client";

import { useState } from "react";
import { useAnalytics } from "@/lib/analytics/analytics";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const analytics = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Track newsletter signup attempt
    analytics.form("newsletter_signup", false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source: "newsletter_signup",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage("Thank you for subscribing! Check your email for a welcome message.");
        setEmail("");
        setName("");
        
        // Track successful newsletter signup
        analytics.newsletter(email, "newsletter_signup");
        analytics.form("newsletter_signup", true);
        analytics.conversion("newsletter_signup");
      } else {
        setIsSuccess(false);
        setMessage(data.error || "Something went wrong. Please try again.");
        
        // Track failed newsletter signup
        analytics.form("newsletter_signup", false, data.error);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Network error. Please try again.");
      
      // Track error
      analytics.error("newsletter_signup_network_error", "network", { error: error instanceof Error ? error.message : "Unknown error" });
      analytics.form("newsletter_signup", false, "Network error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with SaaSFast
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Get the latest updates, tips, and exclusive content delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => analytics.button("newsletter_subscribe", "newsletter")}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Subscribing...
                </div>
              ) : (
                "Subscribe to Newsletter"
              )}
            </button>
          </div>
        </form>

        {message && (
          <div className={`mt-4 p-4 rounded-lg ${
            isSuccess 
              ? "bg-green-100 text-green-800 border border-green-200" 
              : "bg-red-100 text-red-800 border border-red-200"
          }`}>
            {message}
          </div>
        )}

        <p className="text-blue-100 text-sm mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;

