<template>
    <div>
        <h1> 这是一个login的vue组件{{msg}}</h1>
    </div>

</template>

<script>
    export default {
        data(){ // 注意 组件中的 data必须是 function
        return {
            msg:"123"
        }

        },
        methods:{
            show(){
                console.log('调用了 login.vue 中的show方法')
            }
        }
     }
</script>


<style>

</style>
