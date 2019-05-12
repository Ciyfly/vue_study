<template>
    <div>
        <h3>商品评论</h3>
        <Comment :id="$route.params.id"></Comment>
    </div>
</template>
<script>
import Comment from '../subcomponents/Comment.vue'
export default {
    components:{
        Comment
    }
}
</script>
<style lang="scss" scoped>
</style>
