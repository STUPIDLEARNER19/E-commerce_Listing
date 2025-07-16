import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true, // Enable network access
    strictPort: true,
    port: 5173,
    open: true // Auto-open browser
  },
  optimizeDeps: {
    include: ['react-router-dom']
  }
})