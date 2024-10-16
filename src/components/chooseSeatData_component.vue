<template>
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
                        <input type="checkbox" name="tickets" id="s1" disabled />
                        <label for="s1" class="movie_seat-seat movie_seat-booked"></label>
                        <div v-for="index in 79" :key="index">
                            <input type="checkbox" name="tickets" :id="'s' + (index + 2)" v-model="selectedSeats[index]"
                                :disabled="prebookedSeats[index]" />
                            <label :for="'s' + (index + 2)" class="movie_seat-seat"
                                :class="{ booked: prebookedSeats[index], selected: selectedSeats[index] }"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="movie_seat-price">
                <div class="movie_seat-total">
                    <span><span class="movie_seat-count">{{ ticketCount }}</span> Vé</span>
                    <div class="movie_seat-amount">Giá: {{ totalAmount }}</div>
                </div>
                <button class="btn nav_btn draw-border"><a href="#lich-chieu">ĐẶT NGAY</a></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            prebookedSeats: [], // Mảng lưu trữ trạng thái ghế đã đặt trước
            selectedSeats: Array(60).fill(false), // Mảng lưu trữ trạng thái ghế người dùng chọn
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
            this.totalAmount = this.ticketCount * 200;
        }
    },
    watch: {
        selectedSeats: {
            handler: function () {
                this.updateTicketCountAndAmount();
            },
            deep: true
        }
    }
};
</script>
