<template>
    <div>
    <!-- 顶部滑动条 -->
    			<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ?'mui-active':'' ]" 
						v-for="item in cates" :key="item.id" @click="getPhotoListByCateid(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

			</div>
            <!-- 底部图片列表 -->

			<ul class="photo-list">
				<router-link :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id" tag="li">
					<img v-lazy="item.img_url">
					<div class="info">
						<div class="info-title">
							{{item.title}}
							<div class="info-body">
								{{item.zaiyao}}
							</div>
						</div>
					</div>
				</router-link>
			</ul>
        </div>
</template>
<script>
// 导入mui的js文件

import mui from '../../lib/mui/js/mui.min.js'


export default {
    data() {
		return {
			cates: [],
			list: [] // 图片列表
		}
	},
	created() {
		this.getAllCategory();
		this.getPhotoListByCateid(0);  //默认进入页面请求全部的也即是0
	},
	mounted() {  // 当组件中的DOM结构被渲染好并放到页面中后, 会执行这个函数
		// 如果要操作DOM元素 就在 mouted里面进行操作
		// 初始化滑动控件
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
	},
	methods: {
		getAllCategory(){
			this.$http.get('api/getimgcategory').then(result=>{
				if(result.body.status === 0){
					result.body.message.unshift({title: '全部', id: 0})
					this.cates = result.body.message
				}
			})
		},
		getPhotoListByCateid(cateId){
			this.$http.get('api/getimages/'+ cateId).then(result=>{
				if (result.body.status === 0){
					this.list = result.body.message;
				}
			})
		}
	},
}
</script>
<style lang="scss" scoped>

*{
	touch-action: pan-y; // 去除那个警告 启用 滑动流程度
}


.photo-list{
	list-style: none;
	margin: 0;
	padding: 10;
	padding-bottom: 0;
	li{
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		position: relative;
	}
	img{
		width: 100%;
		vertical-align: middle;
	}
img[lazy=loading] {
	width: 40px;
	height: 300px;
	margin: auto;
}

	.info{
		color:white;
		text-align: left;
		position: absolute;
		bottom: 0;
		background-color: rgba(0,0,0,0.4);
		max-height: 84px;
		.info-title{
			font-size: 14px;
		}
		.info-body{
			font-size: 13px;
		}
	}

}

</style>
