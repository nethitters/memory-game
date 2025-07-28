/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import type { UserConfig } from "vite";

// Define the Vite config with proper type casting
export default defineConfig({
  base: "/memory-game/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
} as UserConfig);
