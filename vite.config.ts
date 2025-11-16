import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // default Vite dev server port
    open: true, // automatically opens in browser
  },
  build: {
    outDir: 'dist', // production build folder
    sourcemap: true, // optional, helpful for debugging
  },
})