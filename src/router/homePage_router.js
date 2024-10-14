import homePage_page from '../pages/homePage_page.vue';
// import DashboardComponent from '../components/DashboardComponent.vue';

const homePage_router = [
    {
        path: '/trang-chu',
        meta: { requiresAuth: false },
        components: {
            default: homePage_page,
        },
        children: [
            // {
            //     path: '',
            //     components: {
            //         default: DashboardComponent,
            //     }
            // }
        ],
    },
];

export default homePage_router;
