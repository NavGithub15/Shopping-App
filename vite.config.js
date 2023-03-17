import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://fh-api-dev.herokuapp.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '/api/products-service/products/website/CAD' }
      }
    }
  }
})