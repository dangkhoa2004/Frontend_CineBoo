import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }, server: {
    host: '0.0.0.0',      // Cho phép kết nối từ mọi địa chỉ IP trong mạng nội bộ
    port: 3000,           // Cổng mà bạn muốn chạy, có thể thay đổi tùy ý
    open: true,           // Mở tự động trình duyệt khi chạy
  },
});
