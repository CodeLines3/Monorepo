import { createApp } from 'vue'
import 'nprogress/nprogress.css'
import 'ant-design-vue/dist/reset.css'
import '@/style.css'
import App from '@/App.vue'

import setupRouter from '@/router/index'
import setupEcharts from '@/plugins/VueEcharts'

const app = createApp(App)
setupRouter(app) // Router
setupEcharts(app) // Echarts

app.mount('#app')
