<template>
    <div class="body-container-form">
        <div class="movie-container">
            <div class="movie-forms">
                <div class="movie-form login">
                    <span class="movie-title">ĐĂNG NHẬP</span>
                    <form action="#">
                        <div class="movie-input-field">
                            <input type="text" placeholder="Nhập email của bạn" required />
                            <i class="uil uil-envelope icon"></i>
                        </div>
                        <div class="movie-input-field">
                            <input type="password" class="password" placeholder="Nhập mật khẩu của bạn" required />
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>
                        <div class="movie-checkbox-text">
                            <div class="movie-checkbox-content">
                                <input type="checkbox" id="logCheck" />
                                <label for="logCheck" class="movie-text">Lưu đăng nhập</label>
                            </div>
                            <a href="#" class="movie-text">Quên mật khẩu?</a>
                        </div>
                        <div class="movie-input-field movie-button">
                            <input type="button" value="Đăng nhập" />
                        </div>
                    </form>
                    <div class="movie-login-signup">
                        <span class="movie-text">Chưa phải là Thành Viên?
                            <a href="#" class="movie-text movie-signup-link">Đăng ký ngay</a>
                        </span>
                    </div>
                </div>
                <!-- Registration Form -->
                <div class="movie-form signup">
                    <span class="movie-title">ĐĂNG KÝ</span>
                    <form action="#">
                        <div class="movie-input-field">
                            <input type="text" placeholder="Nhập tên của bạn" required />
                            <i class="uil uil-user"></i>
                        </div>
                        <div class="movie-input-field">
                            <input type="text" placeholder="Nhập email của bạn" required />
                            <i class="uil uil-envelope icon"></i>
                        </div>
                        <div class="movie-input-field">
                            <input type="password" class="password" placeholder="Nhập mật khẩu" required />
                            <i class="uil uil-lock icon"></i>
                        </div>
                        <div class="movie-input-field">
                            <input type="password" class="password" placeholder="Xác nhận mật khẩu" required />
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>
                        <div class="movie-checkbox-text">
                            <div class="movie-checkbox-content">
                                <input type="checkbox" id="termCon" />
                                <label for="termCon" class="movie-text">Tôi đã chấp nhận tất cả các điều khoản và
                                    điều
                                    kiện</label>
                            </div>
                        </div>

                        <div class="movie-input-field movie-button">
                            <input type="button" value="Đăng ký" />
                        </div>
                    </form>
                    <div class="movie-login-signup">
                        <span class="movie-text">Đã đăng ký thành viên
                            <a href="#" class="movie-text movie-login-link">Đăng nhập ngay</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.extend_header {
    background-color: black;
}

.body-container-form {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.movie-container {
    max-width: 430px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 0 20px;
}

.movie-container .movie-forms {
    display: flex;
    align-items: center;
    height: 440px;
    width: 200%;
    transition: height 0.2s ease;
}

.movie-container .movie-form {
    width: 50%;
    padding: 30px;
    background-color: #fff;
    transition: margin-left 0.18s ease;
}

.movie-container.active .login {
    margin-left: -50%;
    opacity: 0;
    transition: margin-left 0.18s ease, opacity 0.15s ease;
}

.movie-container .signup {
    opacity: 0;
    transition: opacity 0.09s ease;
}

.movie-container.active .signup {
    opacity: 1;
    transition: opacity 0.2s ease;
}

.movie-container.active .movie-forms {
    height: 600px;
}

.movie-container .movie-form .movie-title {
    position: relative;
    font-size: 27px;
    font-weight: 600;
}

.movie-form .movie-title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: var(--purple-hover);
    border-radius: 25px;
}

.movie-form .movie-input-field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 30px;
}

.movie-input-field input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: all 0.2s ease;
}

.movie-input-field input:is(:focus, :valid) {
    border-bottom-color: var(--purple-hover);
}

.movie-input-field i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 23px;
    transition: all 0.2s ease;
}

.movie-input-field input:is(:focus, :valid)~i {
    color: var(--purple-hover);
}

.movie-input-field i.icon {
    left: 0;
}

.movie-input-field i.showHidePw {
    right: 0;
    cursor: pointer;
    padding: 10px;
}

.movie-form .movie-checkbox-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.movie-checkbox-text .movie-checkbox-content {
    display: flex;
    align-items: center;
}

.movie-checkbox-content input {
    margin-right: 10px;
    accent-color: var(--purple-hover);
}

.movie-form .movie-text {
    color: #333;
    font-size: 14px;
}

.movie-form a.movie-text {
    color: var(--purple-hover);
    text-decoration: none;
}

.movie-form a:hover {
    text-decoration: underline;
}

.movie-form .movie-button {
    margin-top: 35px;
}

.movie-form .movie-button input {
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: var(--purple-hover);
    cursor: pointer;
    transition: all 0.3s ease;
}

.movie-button input:hover {
    background-color: var(--purple-hover);
}

.movie-form .movie-login-signup {
    margin-top: 30px;
    text-align: center;
}
</style>