/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['shop.juventa.ua', 'utfs.io', 'uploadthing.com'], // Add the external hostname here
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Застосовується до всіх маршрутів
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
          },
        ],
      },
    ]
  },
};

export default nextConfig;
