import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75], // Thêm dòng này để cho phép Next.js xử lý ảnh chất lượng 100
  },
};

export default nextConfig;
