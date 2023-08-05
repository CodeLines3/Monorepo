import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

const resolvePath = (path: string) => resolve(__dirname, path)
const base = loadEnv(process.env.NODE_ENV, process.cwd()).VITE_BASE
const chunks = ['html2canvas', 'gojs', 'rxjs', 'echarts', 'element-plus', 'vue-echarts', 'vue-router', 'jspdf']
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 1024,
    chunkSizeWarningLimit: 1024,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const libName = id.toString().split('node_modules/')[1].split('/')[0].toString()
            if (chunks.includes(libName)) return libName
          }
          return 'vendor'
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
        assetFileNames: '[ext]/[name].[hash].[ext]' // 用于输出静态资源的命名，[ext]表示文件扩展名 css
      }
    }
  }
})
