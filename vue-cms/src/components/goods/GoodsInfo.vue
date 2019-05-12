<template>
    <div class="goodsinfo-container">
        <h3>商品详情</h3>

        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <!-- 加上ref就能获取到这个dom了 -->
        <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<Swiper :lunbotuList="lunbotuList" :isfull="false"></Swiper>
					</div>
				</div>
			</div>
        <!-- 商品购买区域 -->
            <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价: <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp; 销售价: <span class="now_price"> ￥{{goodsinfo.sell_price}}</span>
                        </p>
                        <p>购买数量: 1<GoodsInfoNumberBox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></GoodsInfoNumberBox> </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
        <!-- 商品参数区域 -->
                    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号: {{goodsinfo.goods_no}}</p>
                        <p>库存情况: {{goodsinfo.stock_quantity}}</p>
                        <p>上架时间: {{goodsinfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图片介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
import Swiper from '../subcomponents/Swiper.vue'
import GoodsInfoNumberBox from '../subcomponents/GoodsIngoNumberBox.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotuList: [],
            goodsinfo: {},
            ballFlag: false, // 控制小球隐藏和显示
            selectedCount: 1
        }
    },
    created() {
        this.getlunboto();
        this.getGoodInfo()
    },
    methods: {
        getlunboto(){
            this.$http.get('api/getthumimages/'+ this.id).then(result=>{
                if(result.body.status === 0){
                    // 先循环增加img属性
                    result.body.message.forEach(item=>{
                        item.img = item.src;
                    })
                    this.lunbotuList = result.body.message;
                }
            })
        },
        getGoodInfo(){
            this.$http.get('api/goods/getinfo/'+ this.id).then(result=>{
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message[0]
                }
            })
        },
        goDesc(id){
            // 点击使用编程式导航
            this.$router.push({name: 'goodsdesc', params: {id}})
        },
        goComment(id){
            this.$router.push({name: 'goodscomment', params: {id}})
        },
        getSelectedCount(count){
            this.selectedCount = count;
            console.log(this.selectedCount)
        },
        addToShopCar(){
            // 加入购物车拿到选择的数量
            // 获取按钮子组件的 值
            // 子组件向父组件传值 事件调用  父向子传递方法  子调用这个方法 子把这个数据当做参数传递这个方法里

            
            // 添加购物车
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){// 设置小球样式
            el.style.transform="translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;
            // 小球移动后的位置不能写死
            // 应该动态计算这个位置值
            // 最终位置的坐标减去小球的初始坐标
            // 如何获取
            // 获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            // 这个与数据没有关系就可以不用vue的来操作了直接 dom 获取元素
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            
            // el.style.transform="translate(540px, 665px)";
            el.style.transform=`translate(${xDist}px, ${yDist}px)`;
            // 注意这里 使用的 `` ${} 来拼接字符串
            el.style.transition = 'all 1s cubic-bezier(.4, -0.3,1,.68)';
            done();
            
        },
        afterEnter(el){
            this.ballFlag =!this.ballFlag;
        }
    },
    components:{
        Swiper,
        GoodsInfoNumberBox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
.now_price{
    color: red;
    font-size: 13px;
}
.mui-card-footer{
    display: block;

    button{
        margin: 10px 0;
    }
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 439px;
    left: 79px;
}
</style>
