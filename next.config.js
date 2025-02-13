/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: { ignoreBuildErrors: true },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    compress: true, // Gzip & Brotli 압축 활성화
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true, // 301 리디렉션 (속도 & SEO 최적화)
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/_next/static/:path*",
                headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
            },
            {
                source: "/",
                headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
            },
        ];
    },
};

module.exports = nextConfig;
