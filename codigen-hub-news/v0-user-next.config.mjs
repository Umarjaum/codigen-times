/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Netlify
  images: {
    unoptimized: true, // Required for static export
  },
  // This is needed to make static export work with App Router
  trailingSlash: true,
}

export default nextConfig

