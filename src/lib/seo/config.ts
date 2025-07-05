import type { Metadata } from "next";

export const SEO_CONFIG = {
  siteName: "SaaSFast",
  siteDescription: "Launch your SaaS in minutes, not months. Complete Next.js template with authentication, payments, and everything you need to succeed.",
  siteUrl: process.env.NEXTAUTH_URL || "https://saasfast.com",
  twitterHandle: "@saasfast",
  author: "SaaSFast Team",
  keywords: [
    "saas template",
    "nextjs boilerplate", 
    "react saas",
    "stripe integration",
    "nextauth",
    "mongodb saas",
    "saas starter",
    "typescript saas"
  ]
};

export function generateMetaTags(options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}): Metadata {
  const {
    title = SEO_CONFIG.siteName,
    description = SEO_CONFIG.siteDescription,
    image = `${SEO_CONFIG.siteUrl}/opengraph-image.png`,
    url = SEO_CONFIG.siteUrl,
    type = "website"
  } = options;

  const fullTitle = title === SEO_CONFIG.siteName ? title : `${title} | ${SEO_CONFIG.siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: SEO_CONFIG.keywords,
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.author,
    openGraph: {
      type: type as any,
      title: fullTitle,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: SEO_CONFIG.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData(type: "organization" | "product" | "article", data?: any) {
  const baseUrl = SEO_CONFIG.siteUrl;

  switch (type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SEO_CONFIG.siteName,
        description: SEO_CONFIG.siteDescription,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [
          "https://twitter.com/saasfast",
          "https://github.com/saasfast",
        ],
      };

    case "product":
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SEO_CONFIG.siteName,
        description: SEO_CONFIG.siteDescription,
        url: baseUrl,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "99",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      };

    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data?.title || SEO_CONFIG.siteName,
        description: data?.description || SEO_CONFIG.siteDescription,
        author: {
          "@type": "Person",
          name: SEO_CONFIG.author,
        },
        publisher: {
          "@type": "Organization",
          name: SEO_CONFIG.siteName,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        datePublished: data?.publishedAt || new Date().toISOString(),
        dateModified: data?.updatedAt || new Date().toISOString(),
        image: data?.image || `${baseUrl}/opengraph-image.png`,
        url: data?.url || baseUrl,
      };

    default:
      return {};
  }
}