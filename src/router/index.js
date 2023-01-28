import { createRouter, createWebHashHistory } from 'vue-router'

const routes=[
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

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router