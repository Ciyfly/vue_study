<template>
    <div >
        <Swiper :lunbotuList="lunbotuList" :isfull="true"></Swiper>

    <!-- 九宫格到六宫格的改造工程 -->
    		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodslist">
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="">
		                   <img src="../../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="">
		                    <img src="../../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="">
		                    <img src="../../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 

        <h1>Home</h1>
    </div>

</template>

<script>

import {Toast } from 'mint-ui'

import Swiper from '../subcomponents/Swiper.vue'

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
            this.$http.get('api/getlunbo').then(result=>{
                // console.log(result)
                if (result.body.status ==0){
                    this.lunbotuList = result.body.message;
                }else{
                    Toast("获取加载轮播图失败")
                }
            })
        }
    },
    components:{
        Swiper
    }
}

</script>


<style lang="scss" scoped>



.mui-grid-view.mui-grid-9{  // ul 
    background-color: #ffffff;
    border: none;
    // 去除背景色
    img{
        width: 60px;
        height: 60px;
    }
}


.mui-media-body{
    font-size: 13px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
    // 去除边框
}
</style>

