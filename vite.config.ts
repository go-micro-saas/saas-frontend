import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@public': '/public',
      '@src': '/src',
    },
  },
  base:'./',
  plugins: [react()],
})
