<template>
    <div class="goodsinfo-container">
        <h3>商品详情</h3>
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
                        <p>购买数量: 1<GoodsInfoNumberBox></GoodsInfoNumberBox> </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small">加入购物车</mt-button>
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
            goodsinfo: {}
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
</style>
