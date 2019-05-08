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

// 轮播图
import { Swipe, SwipeItem, Button } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
// 使用vue-resource引入图片

// 懒加载 这里要成功必须全部导入

import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

import VueResource from 'vue-resource'

Vue.use(VueResource)

// 设置请求的根路径
Vue.http.options.root  = "http://www.liulongbin.top:3005/"
// 全局设置 post时候表单数据格式
Vue.http.options.emulateJSON = true;


// 定义全局的过滤器  格式化时间

// 导入时间插件
import moment from 'moment'

Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    //  这里使用 moment 
    return moment(dataStr).format(pattern)
})

import Vue from 'vue'

import app from './App.vue'

// 4.挂载路由对象
var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    router
})