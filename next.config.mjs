/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  //rewrite only works on client components
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.github.com/api/:path*',
      },
    ]
  },
  // output: "export"
};

export default nextConfig;
