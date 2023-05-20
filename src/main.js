import { createApp, reactive } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import App from './App.vue';
import router from "./router.js"
import { onMounted } from 'vue';

const app = createApp(App)
app.use(ElementPlus)
  
  app.use(router);
app.mount('#app')
export default app;