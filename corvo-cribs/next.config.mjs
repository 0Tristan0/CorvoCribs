/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin: 'anonymous',
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:4000/:path*'
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/path/(.*)',
                "headers": [
                    { "key": "Access-Control-Allow-Credentials", "value": "true" },
                    { "key": "Access-Control-Allow-Origin", "value": "*" }, // Change this to specific domain for better security
                    {
                        "key": "Access-Control-Allow-Methods",
                        "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
                    },
                    {
                        "key": "Access-Control-Allow-Headers",
                        "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                    }
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'photos.zillowstatic.com',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'photos.zillowstatic.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;

