<template>
    <div class="shopcar-container">
        <div class="goods-list" v-for="(item, index) in goodsList" :key="item.id">

            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥ {{item.sell_price}}</span>
                                <Shopcarnumberbox :initcount="$store.getters.getGoodsCount[item.id]"
                                :goodsid="item.id"></Shopcarnumberbox>
                                <!-- 如何从购物车中获取商品的数量 创建一个空对象
                                然后循环购物车中所有商品的数据 把当前这条的id 为键 count为值
                                所有的商品循环一遍就会得到一个对象 -->
                                <a href="#" @click.prevent="remove(item.id, index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
            
        </div>

        <!-- 商品结算区域 -->

        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
		</div>

    </div>

</template>

<script>
import Shopcarnumberbox from '../subcomponents/Shopcar_numbox.vue'
export default {
    data() {
        return {
            goodsList: [] // 购物车中所有商品的数据
        }
    },created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            // 获取store中所有商品的id然后用逗号分隔的字符串
            var idArr = []
            this.$store.state.car.forEach(item=>{
                idArr.push(item.id);
            })
            if(idArr.length<=0){
                return  // 如果购物车里面小于0那么直接返回
            }
            // 获取购物车商品列表
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
                if(result.body.status === 0){
                    this.goodsList = result.body.message
                }
            })
        },
        remove(id, index){
            // 从store删除 id goodlist index 对于删除
            this.goodsList.splice(index,1);
            this.$store.commit('removeFormCar', id)
        }
    },
    components:{
        Shopcarnumberbox
    }
}
</script>


<style lang="scss" scoped>
.shopcar-container{
    background-color: #eeee;
    overflow: hidden;

    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
            }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{color: red; font-weight: bold}
        }

    }
}
</style>

