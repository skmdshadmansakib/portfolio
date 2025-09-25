import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // <-- Add this for GitHub Pages
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
