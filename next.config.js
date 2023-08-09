/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const headers = [];
    headers.push({
      headers: [
        {
          key: "X-Robots-Tag",
          value: "index",
        },
      ],
      source: "/",
    });
    return headers;
  },
};

module.exports = nextConfig;
