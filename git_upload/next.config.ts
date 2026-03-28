import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@grpc/grpc-js",
    "@grpc/proto-loader",
    "firebase-admin",
  ],
};

export default nextConfig;
