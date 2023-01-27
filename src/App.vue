<template>
  <div id="app">
    <!-- 头部 -->
    <Header/>
    <!-- 中间内容区域 -->
    <div class="container">
        <!-- 该组件会根据不同的访问路径，渲染不同的组件 -->
        <router-view></router-view>
    </div>    
    <!-- 底部 -->
    <Footer/>
  </div>
</template>
 
<script>
// 导入组件
import Header from './components/headerPage.vue'
import Footer from './components/footerPage.vue'
export default {
  name: 'app',
  components: {
      // 注册组件
      Header,
      Footer
  }
}
</script>
 
<style>
.container{
    border: 1px solid gray; 
    margin:30px auto;
    width:1000px; 
    min-height: 200px;
} 
</style>