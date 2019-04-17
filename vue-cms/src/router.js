
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbr/HomeContainer.vue'
import MemberContainer from './components/tabbr/MemberContainer.vue'
import ShopcarContainer from './components/tabbr/ShopcarContainer.vue'
import SearchContainer from './components/tabbr/SearchContainer.vue'

var router = new VueRouter({
    routes:[
        {path:'/home', component:HomeContainer},
        {path:'/member', component:MemberContainer},
        {path:'/shopcar', component:ShopcarContainer},
        {path:'/search', component:SearchContainer},
       
    ],
    linkActiveClass:'mui-active'  // 覆盖默认的路由高亮的类 把 router-link-active 这个类替换为 mui的选中类样式
})

//  把路由对象暴露出去
export default router