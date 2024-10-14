<template>
  <div class="container">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
      <h2>Vui lòng đăng nhập</h2>
      <input type="text" placeholder="username" v-model="username" @keydown.enter="login" />
      <input type="password" placeholder="password" v-model="password" @keydown.enter="login" />
      <button @click="login" style="width: 150px;">Login</button>
    </div>
  </div>
</template>

<script>
import { authService } from '../services/authService';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      authService.login(this.username, this.password)
        .then(response => {
          const token = response.data.token;
          const role = response.data.role;
          localStorage.setItem('token', token);
          // console.log('Token:', token, 'Role:', role);
          this.$store.dispatch('login', response.data.user);
          this.$router.push('/dashboard');
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
          } else {
            alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
          }
        });
    }
  }
};
</script>
