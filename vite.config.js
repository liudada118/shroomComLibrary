import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ShroomComLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `shroomcomlibrary.${format}.js`
    },
    rollupOptions: {
      external: (id) =>
        ['react', 'react-dom', 'echarts', 'three'].includes(id) ||
        id.startsWith('three/'),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          echarts: 'echarts',
          three: 'THREE'
        }
      }
    }
  }
})
