/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/financial_frontend',
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

export default nextConfig
