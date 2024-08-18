import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://initial-web-projects.onrender.com'
    }
  }
});
