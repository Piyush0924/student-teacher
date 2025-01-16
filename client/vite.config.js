import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://student-teacher-appoint-git-main-piyushs-projects-c005e3cc.vercel.app', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
