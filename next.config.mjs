// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/coffee',
          destination: '/menu/coffee',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  