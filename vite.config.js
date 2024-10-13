import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  // base: '/rix-app/', 
  // build: {
  //   outDir: 'dist',
  //   chunkSizeWarningLimit: 1500,
  // }

  plugins: [react()],
  build: {
    base: '/rix-app/', // Replace with the actual repository name if deploying on GitHub Pages
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
  },
  server: {
    historyApiFallback: true,  // For development server fallback
  },
  // For production deployment
  // resolve: {
  //   alias: {
  //     find: /\/src\//,
  //     replacement: '/src/'
  //   },
  // },


})
