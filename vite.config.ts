import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@Molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@Organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@Templates': path.resolve(__dirname, 'src/components/templates'),
      '@Views': path.resolve(__dirname, 'src/views')
    },
  },
  assetsInclude: ['**/*.mp4'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`
      }
    }
  },
  plugins: [
    vue(),
    eslintPlugin(),
    svgLoader()
  ],
  server: {
    watch: {
      ignored: ['**/coverage/**'],
    },
  }
})
