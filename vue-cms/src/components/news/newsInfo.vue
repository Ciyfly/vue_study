<template>
   <div class="newsinfo-container">
       <h3>{{newsinfo.title}}</h3>
       <p class="subtitle">
           <span>发表时间 {{newsinfo.add_tim | dateFormat}}</span>
           <span>点击 {{newsinfo.click}}}次</span>
       </p>
       <hr>

       <div class="content" v-html="newsinfo.content">

           
       
       </div>
    <comment-box :id="this.id"></comment-box>
   </div>
</template>
<script>

import Comment from '../subcomponents/Comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    created() {
       this.getnewsinfo()
    },
    methods: {
        getnewsinfo(){
            this.$http.get("http://www.liulongbin.top:3005/api/getnew/"+ this.id).then(result=>{
                if (result.body.status == 0){
                    this.newsinfo = result.body.message[0]
                    console.log(result.body.message)
                }
            })
        }
    },
    components:{
        'comment-box':Comment
    }
}
</script>
<style lang="scss" >

.newsinfo-container{
    padding: 0;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
