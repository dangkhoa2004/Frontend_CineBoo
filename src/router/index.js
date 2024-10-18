import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '../services/authService.js';
import authPage_route from './authPage_route';
import homePage_router from './homePage_router';
import moviePage_router from './moviePage_router.js';
import paymentPage_route from './paymentPage_route.js';
import notFoundPage_page from '../pages/notFoundPage_page.vue';

const routes = [
    { path: '/', redirect: '/trang-chu' },
    ...authPage_route,
    ...homePage_router,
    ...moviePage_router,
    ...paymentPage_route,
    { path: '/:pathMatch(.*)*', component: notFoundPage_page }
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
