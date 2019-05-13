<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initcount" 
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
    // watch: {
    //     // 属性监听
    //     'max': function(newVal, oldVal){
    //         // 通过 numbox js api设置最大值 
    //         // 因为这个 max一定会有 我们监控 更新就 替换下
    //         mui('.mui-numbox').numbox().setOption('max', newVal);
    //     }
    // },
    methods: {
        countChanged(){
            // this.$emit('getcount', parseInt(this.$refs.numbox.value));
            // 数量改变了
            this.$store.commit('updateGoodsInfo', {id: this.goodsid, count: this.$refs.numbox.value})

        }
    },
    props: ['initcount', 'goodsid']
}
</script>
<style lang="scss" scoped>
</style>
