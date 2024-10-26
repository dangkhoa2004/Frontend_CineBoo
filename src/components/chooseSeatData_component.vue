<template>
    <div id="chon-ghe"></div>
    <div class="schedule-container">
        <div class="schedule-header">
            <h2>CHỌN GHẾ</h2>
            <div class="date-selector">
                <button>TẤT CẢ</button>
                <button class="inactive">GHẾ VIP</button>
                <button class="inactive">GHẾ THƯỜNG</button>
            </div>
        </div>
        <div class="movie_seat-center">
            <div class="movie_seat-tickets">
                <div class="movie_seat-selector">
                    <div class="movie_seat-seats">
                        <div class="movie_seat-status">
                            <div class="movie_seat-item">Có thể chọn</div>
                            <div class="movie_seat-item">Đã chọn</div>
                            <div class="movie_seat-item">Đang chọn</div>
                            <div class="movie_seat-item">Màn hình</div>
                        </div>
                        <div class="movie_seat-all-seats">
                            <input type="checkbox" name="tickets" id="s1" />
                            <!-- <label for="s1" class="movie_seat-seat movie_seat-booked"></label> -->
                            <div v-for="index in 80" :key="index">
                                <input type="checkbox" name="tickets" :id="'s' + (index + 2)"
                                    v-model="selectedSeats[index]" :disabled="prebookedSeats[index]" />
                                <label :for="'s' + (index + 2)" class="movie_seat-seat"
                                    :class="{ booked: prebookedSeats[index], selected: selectedSeats[index] }"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movie_seat-price">
                    <div class="movie_seat-total">
                        <span><span class="movie_seat-count">{{ ticketCount }}</span> Vé</span>
                        <span>Ghế: {{ getSelectedSeats().join(', ') }}</span>
                        <div class="movie_seat-amount">Giá: {{ totalAmount }}</div>
                    </div>
                    <button class="btn nav_btn draw-border"><a href="#thong-tin">ĐẶT NGAY</a></button>
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
            prebookedSeats: [],
            selectedSeats: Array(60).fill(false),
            ticketCount: 0,
            totalAmount: 0,
        };
    },
    created() {
        this.generateRandomBookedSeats();
    },
    methods: {
        generateRandomBookedSeats() {
            this.prebookedSeats = Array.from({ length: 69 }, () => Math.random() < 0.3);
        },
        updateTicketCountAndAmount() {
            this.ticketCount = this.selectedSeats.filter(seat => seat).length;
            EventBus.ticketCount = this.ticketCount;
            const ticketPrice = 160000;
            this.totalAmount = this.ticketCount * ticketPrice;
            EventBus.selectedSeats = this.getSelectedSeats();
        },
        getSelectedSeats() {
            return this.selectedSeats
                .map((selected, index) => selected ? `S${index + 1}` : null)
                .filter(seat => seat !== null);
        }
    },
    watch: {
        selectedSeats: {
            handler: function () {
                this.updateTicketCountAndAmount();
                EventBus.selectedSeats = this.getSelectedSeats();
            },
            deep: true
        }
    }
};
</script>
