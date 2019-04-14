<template>
    <div>
        <h1> 这是Account组件</h1>
        <router-link to="/account/login">Login</router-link>
        <router-link to="/account/register">Register</router-link>
        <!-- 注意 这里 如果是子组件 子路由要写全地址 把父的也要写上 !!! -->

        <router-view></router-view>
    </div>

</template>

<script>

</script>


<style>

</style>
