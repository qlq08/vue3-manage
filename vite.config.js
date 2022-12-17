import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动导入
/* import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' */
// 按需导入
// import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入
    /*  AutoImport({
       resolvers: [ElementPlusResolver()],
     }),
     Components({
       resolvers: [ElementPlusResolver()],
     }), */
    // 按需导入
    ElementPlus()
  ],
})
