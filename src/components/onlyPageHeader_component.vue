<template>
    <header class="extend_header" id="home">
        <nav>
            <div class="navbar">
                <div class="logo">
                    <a href="/trang-chu">
                        <h2>CINEBOO</h2>
                    </a>
                </div>
                <div class="menu_btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <ul class="links">
                <li><a href="/trang-chu">TRANG CHỦ</a></li>
                <li><a href="/phim">PHIM</a></li>
                <li><a href="/trang-chu#rap-phim">RẠP</a></li>
                <li><a href="/trang-chu#kham-pha">KHÁM PHÁ</a></li>
                <li><a href="/trang-chu#lien-he">HỖ TRỢ</a></li>
                <li class="mobile-login"><a href="/dang-nhap">ĐĂNG NHẬP</a></li>
            </ul>
            <button class="btn nav_btn draw-border desktop-login"><a href="/dang-nhap">ĐĂNG NHẬP</a></button>
        </nav>
    </header>
</template>
<style scoped>
.animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(-225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
}

@keyframes textclip {
    to {
        background-position: 100% center;
    }
}
</style>