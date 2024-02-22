import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue';

//global
import CyberUi from '../dist/cy-element-ui.mjs';
import '../dist/style.css';

console.log(CyberUi, 'CyberUiCyberUi');
Vue.use(ElementUI, { size: 'small' });
Vue.use(CyberUi);
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
