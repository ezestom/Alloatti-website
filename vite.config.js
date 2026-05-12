import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting for smaller initial load
    cssCodeSplit: true,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk — react + router cached separately
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion is heavy — load separately
          motion: ['framer-motion'],
        },
      },
    },
    // Target modern browsers for smaller output
    target: 'es2020',
    // Increase warning threshold since we have videos
    chunkSizeWarningLimit: 800,
  },
})
