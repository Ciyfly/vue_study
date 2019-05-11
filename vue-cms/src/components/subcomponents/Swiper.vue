<template>
    <div>
    <mt-swipe :auto="4000">
    <!-- 在组件中使用 v-for一定要使用 key -->
    <!-- 谁使用轮播图组件谁传 lunbotiList -->
    <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" :class="{'full':isfull}">
    </mt-swipe-item>
    </mt-swipe>
    </div>
    <!-- 为什么商品详情这么丑  -->
    <!-- 在商品详情页面中的图片如果也使用 宽高 威100%的话页面不好看 -->
    <!-- 商品详情页面中的轮播图 高度100% 宽度自适应 -->
    <!-- 他们的区域是宽度  -->
    <!-- 可以定义一个属性 传递宽度 -->
</template>
<script>
export default {
    props: ['lunbotuList', 'isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    //这里选择第一个是这样的 
    .mint-swipe-item{
        text-align: center;
        &:nth-child(1){
            background-color: red;
        }
    }

    img{
        width: 100%;
        height: 100%;
    }
}
.full{
    width: 100%;
}
</style>
