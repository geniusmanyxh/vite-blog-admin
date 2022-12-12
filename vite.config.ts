import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from './config/unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss()
  ],
  // 这里变更一下端口
  server: {
    port: 8443,
  },
})
