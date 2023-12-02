import { createApp } from 'vue';

import '@/styles/reset.css';
import '@/styles/global.css';
import '@/styles/iconfont.css';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from '@/App.vue';

import router from './routers';
const app = createApp(App)
app.use(router);
// app.use(ElementPlus);
app.mount('#app');
