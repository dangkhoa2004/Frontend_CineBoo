<template>
    <div class="movie-container">
        <div id="stars"></div>
        <div class="one">
            <h1>PHIM ĐANG CHIẾU</h1>
        </div>
        <div class="movie-content">
            <div class="movie-grid-container section hidden">
                <movieCardData_component v-for="(movie, index) in movies" :key="index" :movieImage="movie.image"
                    :movieTitle="movie.title" :movieDescription="movie.description" :movieRating="movie.rating"
                    :movieVotes="movie.votes" />
            </div>
        </div>
    </div>
</template>


<script>
import movieCardData_component from '../components/movieCardData_component.vue';

export default {
    name: 'moviePageData_component',
    components: {
        movieCardData_component
    },
    data() {
        return {
            movies: [
                {
                    image: 'https://i.ibb.co/34Q0xs1/joker.jpg',
                    title: 'Joker: Folie à Deux - Điên Có Đôi',
                    description: 'Thời lượng: 138 phút | Ngày công chiếu: 03/10/2024',
                    rating: 7.8,
                    votes: 249,
                },
                {
                    image: 'https://i.ibb.co/fY1FGpC/fubao.jpg',
                    title: 'Fubao: Bảo Bối Của Ông',
                    description: 'Thời lượng: 94 phút | Ngày công chiếu: 10/10/2024',
                    rating: 9.0,
                    votes: 57,
                }, {
                    image: 'https://i.ibb.co/Byfc17s/bocchi.jpg',
                    title: 'Bocchi The Rock !',
                    description: 'Thời lượng: 92 phút | Ngày công chiếu: 11/10/2024',
                    rating: 7.9,
                    votes: 37,
                }, {
                    image: 'https://i.ibb.co/QCrsBXD/codauhaomon.jpg',
                    title: 'Cô Dâu Hào Môn',
                    description: 'Thời lượng: 114 phút | Ngày công chiếu: 16/10/2024',
                    rating: 8.0,
                    votes: 64,
                }, {
                    image: 'https://i.ibb.co/ZhFw2qt/domino.jpg',
                    title: 'Domino: Lối Thoát Cuối Cùng',
                    description: 'Thời lượng: 103 phút | Ngày công chiếu: 11/10/2024',
                    rating: 7.5,
                    votes: 11,
                }, {
                    image: 'https://i.ibb.co/r5x8cbg/kumanthong.jpg',
                    title: 'Kumanthong: Chiêu Hồn Vong Nhi',
                    description: 'Thời lượng: 101 phút | Ngày công chiếu: 03/10/2024',
                    rating: 7.0,
                    votes: 59,
                }, {
                    image: 'https://i.ibb.co/G5Z6GFy/robot.jpg',
                    title: 'Robot Hoang Dã',
                    description: 'Thời lượng: 102 phút | Ngày công chiếu: 11/10/2024',
                    rating: 8.8,
                    votes: 191,
                }, {
                    image: 'https://i.ibb.co/TqnXdN9/teeyod.jpg',
                    title: 'Tee Yod: Quỷ Ăn Tạng Phần 2',
                    description: 'Thời lượng: 111 phút | Ngày công chiếu: 10/10/2024',
                    rating: 9.4,
                    votes: 173,
                }, {
                    image: 'https://i.ibb.co/fC6KKLs/doanhcongduoctoi.jpg',
                    title: 'Đố Anh Còng Được Tôi',
                    description: 'Thời lượng: 118 phút | Ngày công chiếu: 26/09/2024',
                    rating: 9.3,
                    votes: 86,
                }, {
                    image: 'https://i.ibb.co/x1CC8xJ/anlac.jpg',
                    title: 'An Lạc',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 18/10/2024',
                    rating: 7.0,
                    votes: 7,
                }, {
                    image: 'https://i.ibb.co/s58L0Fx/tinhieucaucuu.jpg',
                    title: 'Tín Hiệu Cầu Cứu',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 18/10/2024',
                    rating: 7.0,
                    votes: 2,
                }, {
                    image: 'https://i.ibb.co/HqN3jL5/venom.jpg',
                    title: 'Venom: Kèo Cuối',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 23/10/2024',
                    rating: 8.9,
                    votes: 194,
                }, {
                    image: 'https://i.ibb.co/cDkMZSR/acquytruyhon.jpg',
                    title: 'Ác Quỷ Truy Hồn',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 25/10/2024',
                    rating: 8.2,
                    votes: 5,
                }, {
                    image: 'https://i.ibb.co/dckX4Sc/trochoinhantinh.jpg',
                    title: 'Trò Chơi Nhân Tính',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 25/10/2024',
                    rating: 7.4,
                    votes: 7,
                }, {
                    image: 'https://i.ibb.co/5TRHgKr/elli.jpg',
                    title: 'Elli Và Bí Ẩn Chiếc Tàu Ma',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 25/10/2024',
                    rating: 7.0,
                    votes: 5,
                }, {
                    image: 'https://i.ibb.co/34Q0xs1/joker.jpg',
                    title: 'Joker: Folie à Deux - Điên Có Đôi',
                    description: 'Thời lượng: 138 phút | Ngày công chiếu: 03/10/2024',
                    rating: 7.8,
                    votes: 249,
                },
                {
                    image: 'https://i.ibb.co/fY1FGpC/fubao.jpg',
                    title: 'Fubao: Bảo Bối Của Ông',
                    description: 'Thời lượng: 94 phút | Ngày công chiếu: 10/10/2024',
                    rating: 9.0,
                    votes: 57,
                }, {
                    image: 'https://i.ibb.co/Byfc17s/bocchi.jpg',
                    title: 'Bocchi The Rock !',
                    description: 'Thời lượng: 92 phút | Ngày công chiếu: 11/10/2024',
                    rating: 7.9,
                    votes: 37,
                }, {
                    image: 'https://i.ibb.co/QCrsBXD/codauhaomon.jpg',
                    title: 'Cô Dâu Hào Môn',
                    description: 'Thời lượng: 114 phút | Ngày công chiếu: 16/10/2024',
                    rating: 8.0,
                    votes: 64,
                }, {
                    image: 'https://i.ibb.co/ZhFw2qt/domino.jpg',
                    title: 'Domino: Lối Thoát Cuối Cùng',
                    description: 'Thời lượng: 103 phút | Ngày công chiếu: 11/10/2024',
                    rating: 7.5,
                    votes: 11,
                }, {
                    image: 'https://i.ibb.co/r5x8cbg/kumanthong.jpg',
                    title: 'Kumanthong: Chiêu Hồn Vong Nhi',
                    description: 'Thời lượng: 101 phút | Ngày công chiếu: 03/10/2024',
                    rating: 7.0,
                    votes: 59,
                }, {
                    image: 'https://i.ibb.co/G5Z6GFy/robot.jpg',
                    title: 'Robot Hoang Dã',
                    description: 'Thời lượng: 102 phút | Ngày công chiếu: 11/10/2024',
                    rating: 8.8,
                    votes: 191,
                }, {
                    image: 'https://i.ibb.co/TqnXdN9/teeyod.jpg',
                    title: 'Tee Yod: Quỷ Ăn Tạng Phần 2',
                    description: 'Thời lượng: 111 phút | Ngày công chiếu: 10/10/2024',
                    rating: 9.4,
                    votes: 173,
                }, {
                    image: 'https://i.ibb.co/fC6KKLs/doanhcongduoctoi.jpg',
                    title: 'Đố Anh Còng Được Tôi',
                    description: 'Thời lượng: 118 phút | Ngày công chiếu: 26/09/2024',
                    rating: 9.3,
                    votes: 86,
                }, {
                    image: 'https://i.ibb.co/x1CC8xJ/anlac.jpg',
                    title: 'An Lạc',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 18/10/2024',
                    rating: 7.0,
                    votes: 7,
                }, {
                    image: 'https://i.ibb.co/s58L0Fx/tinhieucaucuu.jpg',
                    title: 'Tín Hiệu Cầu Cứu',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 18/10/2024',
                    rating: 7.0,
                    votes: 2,
                }, {
                    image: 'https://i.ibb.co/HqN3jL5/venom.jpg',
                    title: 'Venom: Kèo Cuối',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 23/10/2024',
                    rating: 8.9,
                    votes: 194,
                }, {
                    image: 'https://i.ibb.co/cDkMZSR/acquytruyhon.jpg',
                    title: 'Ác Quỷ Truy Hồn',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 25/10/2024',
                    rating: 8.2,
                    votes: 5,
                }, {
                    image: 'https://i.ibb.co/dckX4Sc/trochoinhantinh.jpg',
                    title: 'Trò Chơi Nhân Tính',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 25/10/2024',
                    rating: 7.4,
                    votes: 7,
                }, {
                    image: 'https://i.ibb.co/5TRHgKr/elli.jpg',
                    title: 'Elli Và Bí Ẩn Chiếc Tàu Ma',
                    description: 'Thời lượng: 0 phút | Ngày công chiếu: 25/10/2024',
                    rating: 7.0,
                    votes: 5,
                }
            ]
        };
    }
};
</script>