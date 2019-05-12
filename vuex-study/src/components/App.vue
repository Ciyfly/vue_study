<template>
    <div>
        <Account></Account>
 
        <GoodsList></GoodsList>
    </div>
</template>
<script>
import Account from './Account.vue'
import GoodsList from './Goodslist.vue'

export default {
    components:{
        Account,
        GoodsList
    }
}
</script>
<style lang="scss" scoped>
</style>
