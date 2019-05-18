<template>
    <div class="app-container">

    <!-- 顶部 Header区域 -->
<mt-header fixed title="我的vue项目">
	<span  slot="left" @click="goBack" v-show="flag">
    	<mt-button icon="back">返回</mt-button>
	</span>
</mt-header>
    <!-- 中间的路由 router-view区域 -->
	<!-- 这里为了动画效果 --> 
	<transition>
		<router-view></router-view>
	</transition>
    <!-- 底部Tabber区域 -->
    <!-- 这里使用MUI的底部样式 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <h1>123123</h1>
    </div>

</template>

<script>
export default {
	data() {
		return {
			flag: false
		}
	},
	created() {
		this.flag = this.$route.path === '/home' ? false : true;
	},
	methods: {
		goBack(){
			// 点击后退
			this.$router.go(-1);
		}
	},
	watch: {  // 监控路由 !!!
		'$route.path':function(newVal){   
			if(newVal=="/home"){
				this.flag = false;
			}
			else{
				this.flag = true;
			}
		}
	},
}
</script>


<style lang="scss" scoped>

.app-container{
    padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;
}

.v-enter{   // 切换的时候进入的那个
	transform: translateX(100%)
}
.v-leave-to{ // 切换的离开的那个
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}

.mint-header{
	z-index: 99;
}

</style>

