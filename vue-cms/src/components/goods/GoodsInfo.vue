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
				<div class="mui-card-header">商品的名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价: <del>￥2399</del>&nbsp;&nbsp; 销售价: <span class="now_price"> ￥2199</span>
                        </p>
                        <p>购买数量: <GoodsInfoNumberBox></GoodsInfoNumberBox> </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
        <!-- 商品参数区域 -->
                    <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
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
            lunbotuList: []
        }
    },
    created() {
        this.getlunboto()
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
</style>
