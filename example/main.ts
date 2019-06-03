/**
 * Created by lihuiyin on 18/9/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import router from './router'
import axios from 'axios'
// 开发模式
import tdseed from '../src/index.js'
import 'iview/dist/styles/iview.css'
// import tdseed from '../dist/tdseed.min.js';
// import '../dist/static/tdseed.css';

Vue.prototype.$axios = axios

// 开启debug模式
// Vue.config.debug = true;
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(tdseed)

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
