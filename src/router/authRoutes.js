import Login from '../components/Login.vue';

const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        beforeEnter: (to, from, next) => {
            localStorage.clear();
            // localStorage.removeItem('authToken');
            next('/login');
        }
    }
];

export default authRoutes;
