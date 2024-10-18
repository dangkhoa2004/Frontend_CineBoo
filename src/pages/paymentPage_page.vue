<template>
    <div class="schedule-container" style="padding: 50px;">
        <div class="schedule-header">
            <h2 style="color: black;">THÔNG TIN THANH TOÁN</h2>
            <div class="date-selector">
                {{ countdown }}
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: '10:00',
            timer: null,
        };
    },
    mounted() {
        this.startCountdown();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        startCountdown() {
            let timeLeft = 600;
            this.timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(this.timer);
                    alert('Hết phiên truy cập hóa đơn');
                    window.location.href = '/';
                } else {
                    timeLeft--;
                    this.countdown = this.formatTime(timeLeft);
                }
            }, 1000);
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }
};
</script>