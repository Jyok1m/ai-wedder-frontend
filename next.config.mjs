/** @type {import('next').NextConfig} */
const nextConfig = {
	// Environment variables
	env: {
		BACKEND_URL: process.env.BACKEND_URL || "http://localhost:4002",
	},
};

export default nextConfig;
