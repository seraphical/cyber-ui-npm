import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

import CyberUi from '../dist/cy-element-plus.es.js';
console.log(CyberUi, 'CyberUi');

const app = createApp(App);
app.use(ElementPlus);

app.use(CyberUi);

app.use(router);

app.mount('#app');
