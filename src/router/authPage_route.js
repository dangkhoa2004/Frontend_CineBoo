import loginPage_page from '../pages/loginPage_page.vue';

const authPage_route = [
    {
        path: '/dang-nhap',
        name: 'Login',
        component: loginPage_page
    },
    {
        path: '/dang-xuat',
        name: 'dang-xuat',
        beforeEnter: (to, from, next) => {
            localStorage.clear();
            // localStorage.removeItem('authToken');
            next('/dang-nhap');
        }
    }
];

export default authPage_route;
