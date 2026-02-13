import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: './',
  build: {
    outDir: 'dist-handmodal',
    emptyOutDir: true,
    rollupOptions: {
      input: 'handmodal/index.html'
    }
  }
})
