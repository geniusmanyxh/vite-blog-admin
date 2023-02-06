import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from './config/unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: false, // 1、true时生成eslint配置文件，2、生成后改为false，避免重复消耗
      },
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      // dirs:'src/mycomponents'
      dirs: ['src/components'],
    }),
    Unocss(),
  ],
  // 这里变更一下端口
  server: {
    port: 8443,
  },
  resolve: {
    alias: {
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      }
    }
  }
})
