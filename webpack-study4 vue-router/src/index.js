import Vue from 'vue'

import app from './components/App.vue'
import account from './components/Account.vue'
import goodslist from './components/Goodslist.vue'

// 1. 导入 vue-router
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter

Vue.use(VueRouter) // 如果模块工程如果使用这个模块就要这么use一下

// 3. 创建路由对象

var router = new VueRouter({
    routes:[
        {path: '/account', component: account},
        {path: '/goodslist', component: goodslist}
    ]
})

var vm = new Vue({
    el:"#app",
    render: c=>c(app), // render 会把el 指定的容器中的所有的内容都清空
    router // 4.将路由对象挂载到vm上
})
// App组件是通过 render函数渲染出来的, render如果要渲染组件, 渲染出来的组件只能放到el:"#app" 所指定的元素中
// Account 和 Goodslist 是通过路由匹配监听到的, 所以这两个组件只能展示到属于路由 的router-view中去

