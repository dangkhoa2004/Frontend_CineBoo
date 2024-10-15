import apiClient from './api.js';

export const fetchMovies = async () => {
    try {
        const response = await apiClient.get('api/movie/list');
        return response.data;
    } catch (error) {
        console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error);
        throw error;
    }
};

export const fetchMovieById = async (id) => {
    try {
        const response = await apiClient.get(`api/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error);
        throw error;
    }
};

export const fetchMovieNow = async () => {
    try {
        const response = await apiClient.get(`api/movie/now`);
        return response.data;
    } catch (error) {
        console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error);
        throw error;
    }
};
export const fetchMovieFuture = async () => {
    try {
        const response = await apiClient.get(`api/movie/future`);
        return response.data;
    } catch (error) {
        console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error);
        throw error;
    }
};