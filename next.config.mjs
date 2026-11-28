const config = {
  poweredByHeader: false,
  turbopack: { root: import.meta.dirname },
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: false },
      { source: '/about', destination: '/en#about', permanent: false },
      { source: '/projects', destination: '/en#work', permanent: false },
      { source: '/skills', destination: '/en#about', permanent: false },
      { source: '/contact', destination: '/en#contact', permanent: false },
    ]
  },
  async rewrites() {
    return [{ source: '/demo/opus/app/:path*', destination: '/demo/opus/demo/app.html' }]
  },
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        source: '/demo/opus/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}
export default config