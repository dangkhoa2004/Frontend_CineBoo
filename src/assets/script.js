export default function effects() {

    document.addEventListener('DOMContentLoaded', function () {
        var menuBtn = document.querySelector(".menu_btn");
        var navLinks = document.querySelector(".links");
        var menuBtnIcon = document.querySelector(".menu_btn i");

        if (menuBtn && navLinks && menuBtnIcon) {
            menuBtn.addEventListener("click", () => {
                navLinks.classList.toggle("open");
                var isOpen = navLinks.classList.contains("open");
                menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
            });
            navLinks.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuBtnIcon.setAttribute("class", "fas fa-bars");
            });
        }

        var elements = document.querySelectorAll('.section');
        var scrollToTopButton = document.getElementById("scrollToTop");

        if (scrollToTopButton) {
            scrollToTopButton.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }

        function revealOnScroll() {
            elements.forEach((el) => {
                var windowHeight = window.innerHeight;
                var elementTop = el.getBoundingClientRect().top;
                var revealPoint = 250;
                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add('show');
                } else {
                    el.classList.remove('show');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                if (scrollToTopButton) {
                    scrollToTopButton.classList.add('show');
                }
            } else {
                if (scrollToTopButton) {
                    scrollToTopButton.classList.remove('show');
                }
            }
        });
    });

    var movieContainer = document.querySelector(".movie-container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwFields = document.querySelectorAll(".password"),
        signUp = document.querySelector(".movie-signup-link"),
        login = document.querySelector(".movie-login-link");

    if (pwShowHide.length > 0) {
        pwShowHide.forEach((eyeIcon) => {
            eyeIcon.addEventListener("click", () => {
                pwFields.forEach((pwField) => {
                    if (pwField.type === "password") {
                        pwField.type = "text";
                        pwShowHide.forEach((icon) => {
                            icon.classList.replace("uil-eye-slash", "uil-eye");
                        });
                    } else {
                        pwField.type = "password";
                        pwShowHide.forEach((icon) => {
                            icon.classList.replace("uil-eye", "uil-eye-slash");
                        });
                    }
                });
            });
        });
    }

    // toggle signup and login form
    if (signUp && login && movieContainer) {
        signUp.addEventListener("click", (e) => {
            e.preventDefault();
            movieContainer.classList.add("active");
        });

        login.addEventListener("click", (e) => {
            e.preventDefault();
            movieContainer.classList.remove("active");
        });
    }
}
