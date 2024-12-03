import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].min.js",
        chunkFileNames: "[name].[hash].min.js",
        assetFileNames: "[name].[hash].min[extname]",
      },
    },
  },
});