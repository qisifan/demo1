import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Swiper from 'swiper'
import {route} from './config/router.config.js'
import {store} from './store/store.js'
import './common/css/swiper-3.4.1.min.css'
import './common/css/animate.css'
import vueTap from 'v-tap';
Vue.use(vueTap);

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

// 引入外部js
require('./common/js/rem.js');
require('./common/js/mock-min.js');
require('./common/js/mockJson.js');

window.axios = axios;
window.Swiper = Swiper;
//
const app = new Vue({
  router: route,
  store,
  axios,
  Loadmore,
  render: h => h(App)
}).$mount('#app')
