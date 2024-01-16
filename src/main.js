import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/main.css';
import { BootstrapVue } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
