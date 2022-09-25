import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@Molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@Organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@Templates': path.resolve(__dirname, 'src/components/templates'),
      '@Views': path.resolve(__dirname, 'src/views')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`
      }
    }
  },
  plugins: [vue()]
})
