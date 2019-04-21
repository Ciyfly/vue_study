<template>
    <div >
        <mt-swipe :auto="4000">
    <!-- 在组件中使用 v-for一定要使用 key -->
    <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img">
    </mt-swipe-item>
    </mt-swipe>
        <h1>Home</h1>
    </div>

</template>

<script>

import {Toast } from 'mint-ui'

export default{
    data(){
        return {
            lunbotuList: [] //保存轮播图数据
        }
    },
    created() {
        this.getLubotu()
    },
    methods: {
        getLubotu(){//获取轮播图数据
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
                // console.log(result)
                if (result.body.status ==0){
                    this.lunbotuList = result.body.message;
                }else{
                    Toast("获取加载轮播图失败")
                }
            })
        }
    },
}

</script>


<style lang="scss" scoped>

.mint-swipe{
    height: 200px;
    //这里选择第一个是这样的 
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
    }

    img{
        width: 100%;
        height: 100%;
    }
}
</style>

