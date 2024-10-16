<template>
    <div class="movie-card">
        <a href="/phim/joker-2024" class="overlay-link">&nbsp;</a>
        <div class="movie-image-container">
            <div class="movie-image-wrapper">
                <img :src="movieImage" :alt="movieTitle">
            </div>
        </div>
        <div class="movie-card-content">
            <h3 class="movie-card-title">{{ movieTitle }}</h3>
            <div class="movie-card-footer">
                <p class="movie-card-description">{{ movieDescription }}</p>
                <div class="movie-card-icons">
                </div>
            </div>
            <p class="movie-rating">{{ movieRating }} ({{ movieVotes }} votes)</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "movieCardData_component",
    props: {
        movieImage: {
            type: String,
            required: true
        },
        movieTitle: {
            type: String,
            required: true
        },
        movieDescription: {
            type: String,
            required: true
        },
        movieRating: {
            type: Number,
            required: true
        },
        movieVotes: {
            type: Number,
            required: true
        }
    }
};
</script>