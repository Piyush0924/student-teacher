import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://vercel.com/piyushs-projects-c005e3cc/student-teacher/8z4QEk3cq43YGFXYeom3P99qMgDw', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
