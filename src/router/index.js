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
        path: '/me',
        name: 'Me',
        component: () =>
            import ("../views/Me.vue")
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ("../views/Register.vue")
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ("../views/Search.vue")
    },
    {
        path: '/product',
        name: 'Product',
        component: () =>
            import ("../views/Product.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router