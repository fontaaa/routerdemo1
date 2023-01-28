<template>
    <div class="header">
        <router-link to="/">首页</router-link>
        <router-link to="/blog">菜单</router-link>
        <router-link to="/about">关于我们</router-link>
    </div>
</template>
 
<script>
    export default {
        
    }
</script>
 
<style scoped>
.header {
    width:1000px;
    margin:0 auto;
    height:80px;
    background:rgb(230, 176, 176);
    display:flex;
    justify-content: center;
    align-items:center;
}
.header a{
    font-size:18px;
    text-decoration: none;
    color:rgb(84, 29, 236);
    margin:0 10px;
}
</style>