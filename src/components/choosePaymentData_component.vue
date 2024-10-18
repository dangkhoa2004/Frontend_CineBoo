<template>
    <div id="thong-tin"></div>
    <div class="schedule-container">
        <div class="schedule-header">
            <h2>THANH TOÁN</h2>
            <div class="date-selector">
            </div>
        </div>
        <section class="movie_checkout_content">
            <div class="movie_checkout_details shadow">
                <div class="movie_checkout_details__item">
                    <div class="movie_checkout_item__image">
                        <img class="movie_checkout_iphone" src="../assets/img/joker.webp" alt="">
                    </div>
                    <div class="movie_checkout_item__details">
                        <div class="movie_checkout_item__title">
                            <h1>Joker: Folie à Deux Điên Có Đôi</h1>
                        </div>
                        <div class="ticket">
                            <div class="movie-info">
                                <p><strong>CineBoo Hải Phòng</strong> - RẠP 6</p>
                                <p>Suất: <strong>10:45</strong> - Thứ Sáu, 16/10/2024</p>
                            </div>
                            <hr class="dotted-line">
                            <div class="seat-info">
                                <p>{{ ticketCount }}x Ghế<span class="price">{{ totalticketPrice }} ₫</span></p>
                                <p>Ghế: {{ getSelectedSeats }}</p>
                            </div>
                            <hr class="dotted-line">
                            <div class="combo-info">
                                <p>{{ totalComboQuantity }}x Combo<span class="price">{{ totalComboPrice }} ₫</span></p>
                                <p>Combo: {{ getComboNames }}</p>
                            </div>
                            <div class="total-info">
                                <p><strong>Tổng cộng</strong><span class="total-price">{{ totalAmount }} ₫</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <infoCustomerData_component />
            <div class="movie_checkout_container">
                <div class="movie_checkout_actions">
                    <a href="#bong-nuoc" class="btn nav_btn draw-border">TIẾP TỤC THANH TOÁN
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import infoCustomerData_component from '../components/infoCustomerData_component.vue';
import { onMounted, onBeforeUnmount, computed, watch } from 'vue';
import EventBus from '../eventBus.js';

export default {
    components: { infoCustomerData_component },
    data() {
        return {
            combos: [],
            ticketCount: 0,
        };
    },
    computed: {
        getSelectedSeats() {
            return Array.isArray(EventBus.selectedSeats)
                ? EventBus.selectedSeats.join(', ')
                : '';
        },
        totalComboPrice() {
            return this.combos.reduce((total, combo) => {
                return total + (combo.price * combo.quantity);
            }, 0);
        },
        totalComboQuantity() {
            return this.combos.reduce((total, combo) => {
                return total + combo.quantity;
            }, 0);
        },
        getComboNames() {
            return this.combos
                .map(combo => `${combo.quantity}x ${combo.name}`)
                .filter(name => name.startsWith('0x') === false)
                .join(', ');
        },
        totalAmount() {
            const ticketPrice = 160000; // Price per seat
            const ticketTotal = EventBus.ticketCount * ticketPrice; // Get ticket count from EventBus
            return ticketTotal + this.totalComboPrice; // Total amount including combos
        },
        totalticketPrice() {
            const ticketPrice = 160000; // Price per seat
            return this.ticketCount * ticketPrice; // Tính tổng giá vé
        }
    },
    methods: {
        updateCombos() {
            this.combos = EventBus.combos || [];
        }
    },
    mounted() {
        this.updateCombos();
        watch(() => EventBus.combos, (newCombos) => {
            this.combos = newCombos || [];
        });

        // Theo dõi sự thay đổi của EventBus.ticketCount
        watch(() => EventBus.ticketCount, (newCount) => {
            this.ticketCount = newCount; // Cập nhật ticketCount trong component thanh toán
        });
    },
    beforeUnmount() {
    }
};
</script>
