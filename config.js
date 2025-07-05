const config = {
  // App settings
  appName: "SaaSFast",
  appDescription: "Launch your SaaS in minutes, not months",
  domainName: "saasfast.com",
  crisp: {
    id: process.env.CRISP_WEBSITE_ID,
  },
  stripe: {
    plans: [
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1234567890" : "price_1234567890",
        name: "Starter",
        description: "Perfect for getting started",
        price: 29,
        priceAnchor: 39,
        features: [
          { name: "NextJS boilerplate" },
          { name: "User authentication" },
          { name: "Stripe payments" },
          { name: "MongoDB database" },
          { name: "Email integration" },
        ],
      },
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1234567891" : "price_1234567891",
        name: "Pro",
        description: "Most popular choice",
        price: 99,
        priceAnchor: 149,
        features: [
          { name: "Everything in Starter" },
          { name: "Advanced components" },
          { name: "Priority support" },
          { name: "Custom integrations" },
          { name: "Analytics dashboard" },
        ],
        isFeatured: true,
      },
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1234567892" : "price_1234567892",
        name: "Enterprise",
        description: "For growing businesses",
        price: 199,
        priceAnchor: 299,
        features: [
          { name: "Everything in Pro" },
          { name: "White-label solution" },
          { name: "Custom development" },
          { name: "Dedicated support" },
          { name: "SLA guarantee" },
        ],
      },
    ],
  },
  aws: {
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    subdomain: "mg",
    fromNoReply: `SaaSFast <noreply@mg.saasfast.com>`,
    fromAdmin: `Marc at SaaSFast <marc@mg.saasfast.com>`,
    supportEmail: "marc@mg.saasfast.com",
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    theme: "light",
    main: "#0f172a",
  },
};

export default config;

