import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue'
import vue from '@vitejs/plugin-vue'

import vueRouter from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueRouter(),
    createVuePlugin(),
  ],

  resolve: {
    alias: {
      '/@/pages': path.resolve(__dirname, 'src/pages'),
    }
  }
})
