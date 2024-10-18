import paymentPage_page from '../pages/paymentPage_page.vue';
import paymentSuccess_component from '../components/paymentSuccess_component.vue';

const paymentPage_route = [
    {
        path: '/dieu-huong-thanh-toan',
        component: paymentPage_page,
        meta: { requiresAuth: false },
        children: [
            {
                path: 'thanh-toan-thanh-cong',
                name: 'paymentSuccess_component',
                component: paymentSuccess_component,
            },
            {
                path: 'dang-cho-thanh-toan',
                name: '',
                component: null,
            },
            {
                path: 'da-huy-thanh-toan',
                name: '',
                component: null,
            },
            {
                path: ':id',
                name: '',
                component: null,
            },
        ],
    },
];

export default paymentPage_route;