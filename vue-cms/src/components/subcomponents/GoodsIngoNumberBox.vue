<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
            <!-- 现在这么直接传递过来 但是 这个max是异步获取的 所以过来是空的 -->
            <!-- 我们不知道什么时候能拿到max值  -->
            <!-- 可以使用 watch属性监听父组件 传递过来 max值 不管watch 会被触发几次 最后一次肯定是合法的数值 -->
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" 
                    @change="countChanged" ref="numbox" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
</template>
<script>
//  子组件什么时候把数据传递给父组件

import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        // 初始化数组选择框组件
        mui('.mui-numbox').numbox();

    },
    watch: {
        // 属性监听
        'max': function(newVal, oldVal){
            // 通过 numbox js api设置最大值 
            // 因为这个 max一定会有 我们监控 更新就 替换下
            mui('.mui-numbox').numbox().setOption('max', newVal);
        }
    },
    methods: {
        countChanged(){
            this.$emit('getcount', parseInt(this.$refs.numbox.value));

        }
    },
    props: ['max']
}
</script>
<style lang="scss" scoped>
</style>
