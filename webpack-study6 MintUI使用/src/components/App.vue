<template>
    <div>

        <h1> 这是App组件</h1>
        <!-- 直接就可以引用 -->
        <mt-button type="default" icon="back" @click="show">default</mt-button>
        <!-- http://mint-ui.github.io/docs/#/zh-cn2/button 这里可以看到 想设置直接写属性就可以 -->

        <router-link to="/account">Accont</router-link>
        <router-link to="/goodslist">Goodslist</router-link>

        <router-view></router-view>
    </div>

</template>

<script>
// 按需导入 Toast组件
import { Toast } from 'mint-ui';
export default{
    data() {
        return {
            
        }
    },
    methods: {
        show(){
           Toast({
            message: '提示',
            position: 'bottom',
            duration: 5000
});
        }
    },
}
</script>


<style>

</style>
