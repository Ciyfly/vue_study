import Vue from 'vue'

import VueRouter from 'vue-router'

// 注意这里和router都导入了一下 VueRouter

// 2. 手动安装 VueRouter

Vue.use(VueRouter) // 如果模块工程如果使用这个模块就要这么use一下

//  全部导入
import MintUI from 'mint-ui' 

import 'mint-ui/lib/style.css'

Vue.use(MintUI) // 把所有的组件注册为全局的组件


import './lib/mui/css/mui.css'


import app from './components/App.vue'

import router from './router.js'

var vm = new Vue({
    el:"#app",
    render: c=>c(app), // render 会把el 指定的容器中的所有的内容都清空
    router // 4.将路由对象挂载到vm上
})
// App组件是通过 render函数渲染出来的, render如果要渲染组件, 渲染出来的组件只能放到el:"#app" 所指定的元素中
// Account 和 Goodslist 是通过路由匹配监听到的, 所以这两个组件只能展示到属于路由 的router-view中去

