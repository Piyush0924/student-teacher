import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://vercel.com/piyushs-projects-c005e3cc/student-teacher/7AW33wJcHbmq6j61qMLuHhGUtvnw', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
