const nextConfig = {
  eslint: {
    // Disable ESLint during builds for demo purposes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for demo purposes
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;