<template>
   <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要吹的内容" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
        <div class="cm-item" v-for="(item, i) in comments" :key="item.add_time">
            <div class="cmt-title">
                第{{i+1}}楼 ： 用户: {{item.user_name}}发表时间 {{item.add_time| dateFormat}}
            </div>
            <div class="body">
                {{item.content === 'undefined' ? '此用户很懒': item.content}}
            </div>
        </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
   </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageIndex: 1, // 默认展示第一页数据
            comments: []
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result=>{
                if(result.body.status === 0){
                    this.comments = this.comments.concat(result.body.message)
                } else{
                    Toast("获取评论失败")
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments()
        }
    },
    props:['id']
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;;
        margin: 0;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 35px;
                background-color: #cccccc
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;

            }
        }
    }
}
</style>
