// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/real-estate/', // 📂 base path for deployment
  plugins: [react()],
  server: {
    historyApiFallback: true, // 🔁 fallback for React Router
  },
});
