import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 
  build: {
    outDir: 'dist',  // Output directory for the build
   
    assetsDir: 'assets',  // Directory for static assets
 
    manifest: true, // Generate manifest.json
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
    
      
      output:
      {
          format: 'es',
          strict: false,
          entryFileNames: "main.js",
          dir: 'dist/'
      }
   }
  },
  server: {
   
  },
 

});