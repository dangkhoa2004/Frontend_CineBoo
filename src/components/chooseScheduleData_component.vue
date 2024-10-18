<template>
    <div id="lich-chieu"></div>
    <div class="schedule-container">
        <div class="schedule-header">
            <h2>Lịch Chiếu</h2>
            <div class="date-selector">
                <button>Hôm Nay <br> 16/10</button>
                <button class="inactive">Thứ Năm <br> 17/10</button>
                <button class="inactive">Thứ Sáu <br> 18/10</button>
                <button class="inactive">Thứ Bảy <br> 19/10</button>
                <button class="inactive">Chủ Nhật <br> 20/10</button>
            </div>
            <div class="filter-options">
                <select id="select-street">
                    <option>Toàn quốc</option>
                    <option>Hải Phòng</option>
                    <option>Hà Nội</option>
                </select>
                <select id="select-theater">
                    <option>Tất cả rạp</option>
                    <option>CineBoo Nguyễn Du</option>
                    <option>CineBoo Sala</option>
                </select>
            </div>
        </div>
        <div class="theater-section">
            <div class="theater-name">CineBoo Nguyễn Du</div>
            <div class="movie-format">2D Phụ Đề</div>
            <div class="time-buttons">
                <button>14:00</button>
            </div>
        </div>
        <div class="theater-section">
            <div class="theater-name">CineBoo Sala</div>
            <div class="movie-format">IMAX 2D Phụ Đề</div>
            <div class="time-buttons">
                <button>11:30</button>
                <button>14:15</button>
                <button>16:45</button>
                <button>19:30</button>
                <button>22:00</button>
            </div>
        </div>
        <div class="theater-section">
            <div class="theater-name">CineBoo Tân Bình</div>
            <div class="movie-format">2D Phụ Đề</div>
            <div class="time-buttons">
                <button>15:45</button>
            </div>
        </div>
        <div class="theater-section">
            <div class="theater-name">CineBoo Kinh Dương Vương</div>
            <div class="movie-format">2D Phụ Đề</div>
            <div class="time-buttons">
                <button>17:15</button>
            </div>
        </div>
    </div>
</template>