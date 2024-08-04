/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "127.0.0.1",
				port: "3001",
			},
			{
				hostname: "localhost",
				port: "3001",
			},
		],
	},
	images: {
		loader: "akamai",
		path: "/",
	},
};

export default nextConfig;
