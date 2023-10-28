import { createApp } from 'vue';

import '@/styles/reset.css';
import '@/styles/global.css';
import '@/styles/iconfont.css';

import App from '@/App.vue';

import router from './routers';
createApp(App).use(router).mount('#app');
