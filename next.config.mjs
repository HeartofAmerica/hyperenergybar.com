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
        {
          source: '/fall-specials',
          destination: '/specials',
          permanent: false,
        },
        {
          source: '/review-us',
          destination: '/locations',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  