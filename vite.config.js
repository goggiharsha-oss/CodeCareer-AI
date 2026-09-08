import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Relative base is only safe for production builds.
  // Using it in dev breaks the Vite HMR WebSocket URL resolution.
  base: command === "build" ? "./" : "/",
}));