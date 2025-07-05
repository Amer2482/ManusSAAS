"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useAnalytics } from "@/lib/analytics/analytics";

interface CheckoutButtonProps {
  priceId: string;
  planName: string;
  price: number;
  className?: string;
  children: React.ReactNode;
}

const CheckoutButton = ({ 
  priceId, 
  planName, 
  price, 
  className = "", 
  children 
}: CheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const analytics = useAnalytics();

  const handleCheckout = async () => {
    if (!session) {
      // Redirect to sign in if not authenticated
      window.location.href = "/auth/signin";
      return;
    }

    setIsLoading(true);
    analytics.button(`checkout_${planName.toLowerCase()}`, "pricing");

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/dashboard?success=true&plan=${planName}`,
          cancelUrl: `${window.location.origin}/pricing?canceled=true`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Track checkout initiation
        analytics.conversion("checkout_initiated", price, "usd");
        
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      analytics.error("checkout_failed", "stripe_error", { 
        planName, 
        priceId, 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
      
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return (
      <button 
        disabled 
        className={`${className} opacity-50 cursor-not-allowed`}
      >
        Stripe Not Configured
      </button>
    );
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`${className} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CheckoutButton;

