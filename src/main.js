import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.prototype.$url = process.env.VUE_APP_DBEV;

if (process.env.NODE_ENV === 'production') {
  Vue.prototype.$url = process.env.VUE_APP_DBPROD;
}

new Vue({
  render(h) { return h(App); },
}).$mount('#app');
