/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
  async redirects() {
    return [
      {
        source: '/_error',
        destination: '/500', // Redirect 500 errors to the custom page
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/404',
        destination: '/404.html', // Serve 404 errors with custom page
      },
      {
        source: '/500',
        destination: '/500.html', // Serve 500 errors with custom page
      },
      {
        source: '/504',
        destination: '/504.html', // Serve 504 errors with custom page
      },
    ];
  },
}

module.exports = nextConfig
