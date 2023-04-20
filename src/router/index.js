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
        path: '/categoryList',
        name: 'categoryList',
        component: () =>
            import ("../views/CategoryList.vue")
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
        path: '/login',
        name: 'Login',
        component: () =>
            import ("../views/Login.vue")
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
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ("../views/Order.vue")
    },
    {
        path: '/payment',
        name: 'Payment',
        component: () =>
            import ("../views/Payment.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//     // let nextRoute = ['Payment', 'Cart', 'Order'];
//     // let userInfo = JSON.parse(localStorage.getItem('userInfo'));


//     // //page need login
//     // if (nextRoute.indexOf(to.name > 0)) {
//     //     if (!userInfo) {
//     //         router.push('/login')
//     //     } else {
//     //         next();
//     //     }
//     // }

//     // console.log(to, from, next);
//     // next();
// })


export default router