import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mkcert from 'vite-plugin-mkcert'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
    // proxy: {
    //   //change here
    //   '/': {
    //     target: 'https://admin.bhojan.shop',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => {
    //       console.log(path)
    //       return path.replace('/^/', '')
    //     },
    //   },
    // },
  },
  plugins: [vue(), vueJsx(), mkcert()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './',
})
