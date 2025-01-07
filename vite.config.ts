import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["assets/icons/favicon.ico", "assets/icons/apple-touch-icon.png"],
      manifest: {
        name: "Kani",
        short_name: "Kani",
        theme_color: "#ffffff",
        icons: [
          {
            src: "assets/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "assets/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "assets/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  base: "/kanee",
});
