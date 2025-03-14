import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use the Render-provided PORT or default to 3000
    host: "0.0.0.0", // Bind to 0.0.0.0 to expose the app
    allowedHosts: ["news-app-3lv8.onrender.com"],
  },
});
