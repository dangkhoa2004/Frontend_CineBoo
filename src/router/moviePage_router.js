import moviePage_page from '../pages/moviePage_page.vue';
import moviePageData_component from '../components/moviePageData_component.vue';
import detailMovieData_component from '../components/detailMovieData_component.vue';

const moviePage_router = [
    {
        path: '/phim',
        component: moviePage_page,
        meta: { requiresAuth: false },
        children: [
            {
                path: '',
                name: 'moviePageData_component',
                component: moviePageData_component,
            },
            {
                path: ':id',
                name: 'detailMovieData_component',
                component: detailMovieData_component,
            },
        ],
    },
];

export default moviePage_router;