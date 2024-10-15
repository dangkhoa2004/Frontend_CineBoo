import moviePage_page from '../pages/moviePage_page.vue';

const moviePage_router = [
    {
        path: '/phim',
        meta: { requiresAuth: false },
        components: {
            default: moviePage_page,
        },
        children: [
            // {
            //     path: '',
            //     components: {
            //         default: ,
            //     }
            // }
        ],
    },
];

export default moviePage_router;
