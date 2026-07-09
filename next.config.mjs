/** @type {import('next').NextConfig} */
const nextConfig = {
  // "standalone" produces a minimal, self-contained server folder that is
  // the recommended way to self-host Next.js (see next.js self-hosting docs).
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
