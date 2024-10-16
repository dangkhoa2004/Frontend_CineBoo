import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '../services/authService.js';
import authPage_route from './authPage_route';
import homePage_router from './homePage_router';
import moviePage_router from './moviePage_router.js';

const routes = [
    { path: '/', redirect: '/trang-chu' },
    ...authPage_route,
    ...homePage_router,
    ...moviePage_router,
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next('/login');
    } else {
        next();
    }
});

export default router;