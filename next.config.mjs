/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // If using a project page, set to: basePath: '/project-name'
  basePath: '',
  trailingSlash: true,
}

export default nextConfig
