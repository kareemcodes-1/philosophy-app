import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import {configDotenv} from "dotenv";

configDotenv();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
       '/api': {
           target: process.env.VITE_BACKEND_URL,
           changeOrigin: true,
       }
    }
  }
  
})
