import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react_youtube/",
  define: {
    "process.env.VITE_GOOGLE_API_KEY": JSON.stringify(process.env.VITE_GOOGLE_API_KEY),
    "process.env.VITE_YOUTUBE_SEARCH_API": JSON.stringify(process.env.VITE_YOUTUBE_SEARCH_API),
  },
});
