import Vue from 'vue'

import app from './components/App.vue'
import account from './components/Account.vue'
import goodslist from './components/Goodslist.vue'

// 使用vuex
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({  // 要记得挂载到 下面的vm实例上
    state:{
        // 这个相当于 data
        count: 0   // 如果在组件中想要访问 store 只能通过 this.$store.state.名称来访问
    },
    mutations:{  // 这个相当于 methoeds  如果要材质 state中的值 只能通过调用 mutations 提供的方法
        increment(state){  // 如果想要调用只能  this.$store.commit('方法名')
            state.count++;
        },
        subtract(state, value){
            state.count -=value ;
        }

    },
    getters:{  // 类似组件的 compented 属性计算 
        // 不能修改数据
        optCount:function(state){
            // 这个每次 更新都会重新执行 进行计算 所有说像 compented
            return 'getters '+ state.count;
        }
    }
})





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
    router,  
    store: store // 只要挂载了 任意组件都能存取数据
})


