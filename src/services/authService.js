import axios from '../axios';
import apiClient from './api.js';

export const fetchProfile = async () => {
    try {
        const response = await apiClient.get('api/user/profile');
        return response.data;
    } catch (error) {
        console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error);
        throw error;
    }
};

export const authService = {
    login(username, password) {
        if (!username || !password) {
            return Promise.reject('Vui lòng điền vào cả hai trường.');
        }

        return axios.post('http://127.0.0.1:8000/api/Auth/login', {
            username,
            password,
        })
            .then(response => {
                const { token, role } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify({ role }));

                // Sau khi đăng nhập thành công, thêm CSRF token vào header
                const csrfToken = document.querySelector('meta[name="csrf-token"]');
                if (csrfToken) {
                    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.getAttribute('content');
                }

                return response;
            });
    },
};


export function isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
}
