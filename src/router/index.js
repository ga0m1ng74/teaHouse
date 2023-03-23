/**
 * router setup js
 */
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: "Home",
        component: Home
    },
    {
        path: '/list',
        name: 'List',
        component: () =>
            import ("../views/List.vue")
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ("../views/Cart.vue")
    },
    {
        path: '/my',
        name: 'My',
        component: () =>
            import ("../views/My.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router