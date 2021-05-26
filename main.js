import Vue from 'vue'
import App from './App'
import store from './store/index.js'

// vuex
Vue.prototype.$store = store

// 引入第三方框架
import uView from "uview-ui";
Vue.use(uView);


Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.url = 'https://www.qingbaoyg.cn/apc/';


const app = new Vue({
	store,
	...App
})
app.$mount()
