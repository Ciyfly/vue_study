<template>
    <div class="photoinfo-container">
        <p class="subtitle">
            <h3>{{photoinfo.title}}</h3>
            <span>发表时间: {{photoinfo.add_time | dateFormat}}</span>
            <span>点击次数: {{photoinfo.click}}</span>
        </p>
        <hr>

        <!-- 缩略图-->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">


        </div>
            <!-- 放置一个现成的 评论子组件 -->
            <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
// 1.导入评论子组件

import comment from '../subcomponents/Comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo: {}, // 图片详情
            slide1: []
        }
    },
    created() {
        this.getPhotoInfo();
        this.getThumimages();
    },
    methods: {
        getPhotoInfo(){
            
            this.$http.get("api/getimageInfo/" + this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0];
                }
            })
        },
        handleClose () {
        console.log('close event')
        },
        getThumimages(){
            this.$http.get("api/getthumimages/" + this.id).then(result=>{
                if(result.body.status === 0){
                    // 循环每个数据补全宽和高
                    result.body.message.forEach(item=>{
                        item.msrc = item.src
                        item.w= 600;
                        item.h = 400;
                    });
                    this.slide1 = result.body.message
                }

            })
        }
    },
    components:{  // 注册评论子组件
        'cmt-box': comment
    }
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
    padding: 3px;
    h3{
        columns: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;

    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;

    }

}
</style>
