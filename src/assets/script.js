export default function effects() {

    document.addEventListener('DOMContentLoaded', function () {
        let menuBtn = document.querySelector(".menu_btn");
        let navLinks = document.querySelector(".links");
        let menuBtnIcon = document.querySelector(".menu_btn i");
        if (menuBtn && navLinks && menuBtnIcon) {
            menuBtn.addEventListener("click", () => {
                navLinks.classList.toggle("open");
                let isOpen = navLinks.classList.contains("open");
                menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
            });
            navLinks.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuBtnIcon.setAttribute("class", "fas fa-bars");
            });
        }

        const elements = document.querySelectorAll('.section');
        const scrollToTopButton = document.getElementById("scrollToTop");
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
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 250;
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
    const movieContainer = document.querySelector(".movie-container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwFields = document.querySelectorAll(".password"),
        signUp = document.querySelector(".movie-signup-link"),
        login = document.querySelector(".movie-login-link");

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

    // JS code to toggle signup and login form
    signUp.addEventListener("click", (e) => {
        e.preventDefault();
        movieContainer.classList.add("active");
    });

    login.addEventListener("click", (e) => {
        e.preventDefault();
        movieContainer.classList.remove("active");
    });

}
