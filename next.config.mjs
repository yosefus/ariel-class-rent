/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          hostname: 'ca.slack-edge.com',
        },
      ],
    },
};

export default nextConfig;
