import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("STRIPE_SECRET_KEY is not set. Payment functionality will be disabled.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
  typescript: true,
});

export const STRIPE_CONFIG = {
  publicKey: process.env.STRIPE_PUBLIC_KEY || "",
  secretKey: process.env.STRIPE_SECRET_KEY || "",
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
  currency: "usd",
  plans: {
    starter: {
      priceId: process.env.NODE_ENV === "development" 
        ? "price_starter_dev" 
        : "price_starter_prod",
      name: "Starter",
      price: 29,
      interval: "one_time",
      features: [
        "NextJS boilerplate",
        "User authentication", 
        "Stripe payments",
        "MongoDB database",
        "Email integration",
        "Basic components",
        "Documentation"
      ]
    },
    pro: {
      priceId: process.env.NODE_ENV === "development" 
        ? "price_pro_dev" 
        : "price_pro_prod",
      name: "Pro",
      price: 99,
      interval: "one_time",
      features: [
        "Everything in Starter",
        "Advanced components",
        "Priority support",
        "Custom integrations", 
        "Analytics dashboard",
        "SEO optimization",
        "Lifetime updates"
      ]
    },
    enterprise: {
      priceId: process.env.NODE_ENV === "development" 
        ? "price_enterprise_dev" 
        : "price_enterprise_prod",
      name: "Enterprise",
      price: 199,
      interval: "one_time",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom development",
        "Dedicated support",
        "SLA guarantee",
        "Team collaboration",
        "Custom integrations"
      ]
    }
  }
};

export function formatPrice(amount: number, currency: string = "usd"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount);
}

export function getPlanByPriceId(priceId: string) {
  return Object.values(STRIPE_CONFIG.plans).find(plan => plan.priceId === priceId);
}

