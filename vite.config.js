import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const base = {
    plugins: [react()],
    assetsInclude: ['**/*.glb'],
  }

  // dev 模式：正常运行应用
  if (command === 'serve') {
    return base
  }

  // build 模式：构建组件库
  return {
    ...base,
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'ShroomComLibrary',
        formats: ['es', 'umd'],
        fileName: (format) => `shroomcomlibrary.${format}.js`
      },
      rollupOptions: {
        external: (id) =>
          [
            'react', 'react-dom', 'echarts', 'three',
            '@react-three/fiber', '@react-three/drei',
            'react-router-dom', 'lucide-react',
            'clsx', 'tailwind-merge', 'antd',
            'echarts-for-react'
          ].includes(id) ||
          id.startsWith('three/') ||
          id.startsWith('@react-three/') ||
          id.startsWith('lucide-react/'),
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            echarts: 'echarts',
            three: 'THREE',
            '@react-three/fiber': 'ReactThreeFiber',
            '@react-three/drei': 'ReactThreeDrei',
            'react-router-dom': 'ReactRouterDOM',
            'lucide-react': 'LucideReact',
            clsx: 'clsx',
            'tailwind-merge': 'tailwindMerge',
            antd: 'antd',
            'echarts-for-react': 'EChartsForReact'
          }
        }
      }
    }
  }
})
