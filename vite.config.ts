import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": __dirname + "/src",
      "@components": __dirname + "/src/components",
      "@pages": __dirname + "/src/pages",
    },
  },
});
