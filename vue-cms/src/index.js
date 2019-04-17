console.log("ok")

// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 1.导入路由对象
import VueRouter from 'vue-router'
// 2.使用路由模块
Vue.use(VueRouter)
// 3.引入路由js
import router from'./router.js'
import { Header  } from 'mint-ui'

Vue.component(Header.name, Header )

import Vue from 'vue'

import app from './App.vue'

// 4.挂载路由对象
var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    router
})