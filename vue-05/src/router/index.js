import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            needsUser: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ( /* webpackChunkName: "signup" */ '../views/Signup.vue')
    }, {
        path: '/settings',
        name: 'settings',
        component: () =>
            import ( /* webpackChunkName: "account" */ '../views/Settings.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const noUser = store.currentUser === null;
    if (noUser && to.meta.needsUser) {
        next('login')
    } else {
        next();
    }
})

export default router