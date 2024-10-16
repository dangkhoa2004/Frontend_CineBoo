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

<style scoped>
.movie-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

.overlay-link {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 20;
}

.movie-image-container {
    overflow: hidden;
}

.movie-image-wrapper {
    height: 11rem;
    position: relative;
    overflow: hidden;
}

.movie-image-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.movie-card-content {
    min-height: 139px;
    background-color: white;
    padding: 1rem;
}

.movie-card-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.movie-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.movie-card-description {
    font-size: 0.875rem;
    color: #718096;
}

.notification-icon {
    color: #ff6b6b;
    transition: color 0.3s ease;
}

.movie-rating {
    font-size: 0.875rem;
    color: #718096;
    margin-top: 0.5rem;
}

.movie-details {
    font-size: 0.75rem;
    color: #4a5568;
    margin-top: 0.5rem;
}
</style>