// 1、导入vue-router
import VueRouter from 'vue-router'
// 2、导入vue
import Vue from 'vue'
// 3、安装
Vue.use(VueRouter)
// 4、创建VueRouter实例-路由对象
const router = new VueRouter({
    // 5、配置路由
    //5.1配置路模式
    mode:"history",
    // 5.2 配置路由对象数组
    routes: [
        {
            path:"/",
            component:()=>import('@/views/homePage.vue')
        },
        {
            path:"/blog",
            component:()=>import('@/views/blogPage.vue')
        },
        {
            path:"/about",
            component:()=>import('@/views/aboutPage.vue')
        }
    ]
})
// 6、导出路由对象
export default router;