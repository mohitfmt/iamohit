/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const headers = [];
    headers.push({
      headers: [
        {
          key: "X-Robots-Tag",
          value: "index, follow",
        },
      ],
      source: "/:path*",
    });
    return headers;
  },
};

module.exports = nextConfig;
