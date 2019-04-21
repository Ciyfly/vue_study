<template>
   <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
                    <!-- 注意这里路由的写法 给to加了绑定属性 -->
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>发表时间 {{item.add_time | dateFormat}}</span>
                                <span>点击: {{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>


			</ul>
   </div>
</template>
<script>
export default {
    data(){
        return {
            news: []
        }
    },
    created() {
        this.getNews()
    },
    methods: {
        getNews(){
            this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then((result)=>{
                if(result.body.status == 0){
                    this.news = result.body.message
                }
            })
        }
    },
    
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;                 // 居中对齐
            justify-content: space-between // 居中对齐
        }
    }
}
</style>
