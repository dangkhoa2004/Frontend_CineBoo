<template>

    <div id="bong-nuoc">
        <div class="schedule-container">
            <div class="schedule-header">
                <h2>BỎNG NƯỚC</h2>
            </div>
            <div class="combo-list">
                <div class="list-for-combo">
                    <div v-for="(combo, index) in combos" :key="index" class="combo-item">
                        <img :src="combo.image" alt="Combo Image" class="combo-image" />
                        <div class="combo-details">
                            <h3>{{ combo.name }}</h3>
                            <p>{{ combo.description }}</p>
                            <p><strong>Giá: {{ combo.price }} đ</strong></p>
                        </div>
                        <div class="combo-quantity">
                            <button @click="decreaseQuantity(index)">-</button>
                            <span>{{ combo.quantity }}</span>
                            <button @click="increaseQuantity(index)">+</button>
                        </div>
                        <div id="time-to-fixed">
                        </div>
                    </div>
                </div>
                <div class="movie_checkout_container">
                    <div class="movie_checkout_actions">
                        <router-link to="/dieu-huong-thanh-toan/thanh-toan-thanh-cong" class="btn nav_btn draw-border"
                            @click.prevent="openLink">
                            XÁC NHẬN THANH TOÁN
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EventBus from '../eventBus.js';

export default {
    data() {
        return {
            combos: [
                { name: "iCombo 1 Big Extra STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn + 1 Snack", price: 109000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-min_1711699834430.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },
                { name: "iCombo 2 Big STD", description: "1 Ly nước ngọt lớn + 1 Bắp lớn", price: 89000, image: "https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-copy-min_1711699814762.jpg", quantity: 0 },]
        };
    },
    methods: {
        openLink() {
            window.open(this.$router.resolve({ path: '/dieu-huong-thanh-toan/thanh-toan-thanh-cong' }).href, '_blank');
        },
        increaseQuantity(index) {
            this.combos[index].quantity++;
            this.updateTotal();
        },
        decreaseQuantity(index) {
            if (this.combos[index].quantity > 0) {
                this.combos[index].quantity--;
                this.updateTotal();
            }
        },
        updateTotal() {
            EventBus.combos = this.combos;
        }
    }
};
</script>