import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.pexels.com','upload.wikimedia.org','raw.githubusercontent.com','cdn.raiolanetworks.com'], // Lista de dominios permitidos
  },
};

export default nextConfig;
