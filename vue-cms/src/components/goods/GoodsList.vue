<template>
    <div class="goods-list">
        <!-- 在网页中有两种跳转方式 1. a 标签跳转
            2. 使用 windows.location.href 编程式跳转
        -->
        <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.mark_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageindex: 1,
            goodslist: []
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get("http://www.liulongbin.top:3005/api/getgoods?pageindex="+ this.pageindex).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = this.goodslist.concat(result.body.message);
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList()
        }
    },
    
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex; // 设置 向下的变成向右的 
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods-item{
        width: 49%;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #cccccc;
        padding: 2px;
        margin: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            height: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eeeeee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
        }
        .sell{
            display: flex;
            justify-content: space-between;
        }
        }
}
</style>
