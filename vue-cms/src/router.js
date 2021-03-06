
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbr/HomeContainer.vue'
import MemberContainer from './components/tabbr/MemberContainer.vue'
import ShopcarContainer from './components/tabbr/ShopcarContainer.vue'
import SearchContainer from './components/tabbr/SearchContainer.vue'
// news
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// photos
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'

// goods
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


var router = new VueRouter({
    routes:[
        {path:'/', component:HomeContainer},
        {path:'/home', component:HomeContainer},
        {path:'/home/newslist', component:NewsList},
        {path:'/home/newsinfo/:id', component:NewsInfo},
        {path:'/home/photolist', component:PhotoList},
        {path:'/home/photoinfo/:id', component:PhotoInfo},
        {path:'/home/goodslist', component:GoodsList},
        {path:'/home/goodsinfo/:id', component:GoodsInfo},
        {path:'/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'},
        {path:'/home/goodscomment/:id', component:GoodsComment, name: 'goodscomment'},
        {path:'/member', component:MemberContainer},
        {path:'/shopcar', component:ShopcarContainer},
        {path:'/search', component:SearchContainer},
       
    ],
    linkActiveClass:'mui-active'  // 覆盖默认的路由高亮的类 把 router-link-active 这个类替换为 mui的选中类样式
})

//  把路由对象暴露出去
export default router