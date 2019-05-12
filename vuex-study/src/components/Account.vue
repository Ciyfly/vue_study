<template>
        <div>
        <h1> 这是Account组件</h1>
        <button @click="add">+</button>
        <button @click="remove">-3</button>
        <input type="text" v-model="$store.state.count">
    </div>
</template>
<script>
export default {
    methods: {
        add(){
            // this.$store.state.count++;   这个不能这么用 不符合 vuex的设计理念
            this.$store.commit('increment');
        },
        remove(){
            this.$store.commit('subtract', 3);
            // 这种是传递参数的 但是只能传递两个参数 一个是方法名 一个是参数值 
            // 如果想传递多个参数值 那么第二个可以是数组或者是对象
        }
    },
}
</script>
<style lang="scss" scoped>
</style>
