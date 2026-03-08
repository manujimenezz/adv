import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/adv/', // Necesario para GitHub Pages (subcarpeta del dominio)
  build: {
    outDir: 'docs', // GitHub Pages permite desplegar desde /docs
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
