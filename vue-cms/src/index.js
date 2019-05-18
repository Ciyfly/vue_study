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



// 导入 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次进入刷新 存储
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state:{ //this.$store.state
        car: car // 将购物车中的商品的数据 用一个数组存起来 在 car数组中存储商品的对象  暂时将这个商品对象设计
                // {id: 商品id, count: 要购买的数量, price: 价格, slected: 是否被选中}
    },
    mutations:{ // this.$store.commit('方法', 参数)
        addToCar(state, goodsinfo){ // 点击加入购物车
            // 如果 购物车有的话就更新数量 如果没有再增加
            var flag = false;
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count +=parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })
            if(flag==false){
                state.car.push(goodsinfo)
            }
            // 更新后 存储到 localStorage里
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsIinfo){
            // 修改购物车的商品值
            state.car.some(item=>{
                if(item.id == goodsIinfo.id){
                    item.count = parseInt(goodsIinfo.count);
                    return true;
                }
            })
            // 当修改完保存到本地
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id){
            state.car.some((item, index)=>{
                if(item.id == id){
                    state.car.splice(index, 1);
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info){
            // 更新商品选择状态
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected;
                }
            })
            // 最后要更新到 localStoreage才行  不然刷新就没了。所以用的 每次属性都从里面读取的
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters:{ // this.$store.getter.方法
        // 相当于计算属性
        getAllCount(state){
            var c = 0;
            state.car.forEach(item=>{
                c +=item.count;
            })
            return c;
        },
        getGoodsCount(state){
            var o ={};
            state.car.forEach(item=>{
                o[item.id] = item.count;
            })
            return o;
        },
        getGoodsSelected(state){
            var selecteds ={}
            state.car.forEach(item=>{
                selecteds[item.id] = item.selected
            })
            return selecteds;
        },
        getGoodsCountAndAmount(state){
            var countandamount = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    countandamount.count +=item.count;
                    countandamount.amount +=item.price * item.count;

                }
            })
            return countandamount

        }
    }
})

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
    router,
    store  // 挂载 store 状态管理对象
})