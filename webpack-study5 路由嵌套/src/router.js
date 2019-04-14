// 1. 导入 vue-router
import VueRouter from 'vue-router'

import account from './components/Account.vue'
import goodslist from './components/Goodslist.vue'
import login from './subcom/Login.vue'
import register from './subcom/Register.vue'


// 3. 创建路由对象

var router = new VueRouter({
    routes:[
        {path: '/account',
        component: account,
        children:[
            {path: 'login', component: login},
            {path: 'register', component: register},
        ]
    },
        {path: '/goodslist', component: goodslist}
    ]
})

//  把路由对象暴露出去
export default router