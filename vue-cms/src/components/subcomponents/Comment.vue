<template>
   <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要吹的内容" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

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
            comments: [],
            msg: ''  // 评论输入的内容
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result=>{
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
        },
        postComment(){
            // 检验是够为空
            if (this.msg.trim().length === 0){
                Toast("评论内容不能为空")
                return
            }
            // 发表评论
            // 参数2 {'content': this.msg}
            // 参数3 
            this.$http.post("api/postcomment/"+this.id, {"content":this.msg.trim()}).then(result=>{
                if (result.body.status == 0){
                    
                    // 1.拼接出一个评论对象
                    var cmt = {
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.msg.trim()
                    }
                    this.comments.unshift(cmt)
                    this.msg = '';
                }else{
                    Toast("评论失败")
                    this.msg='';
                }
            })
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
