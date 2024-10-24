export function hideInputPassword() {

    const pwShowHide = document.querySelectorAll(".showHidePw");
    const pwFields = document.querySelectorAll(".password");


    if (pwShowHide.length > 0) {
        pwShowHide.forEach((eyeIcon) => {
            eyeIcon.addEventListener("click", () => {
                pwFields.forEach((pwField) => {
                    if (pwField.type === "password") {
                        pwField.type = "text";
                        pwShowHide.forEach((icon) => {
                            icon.classList.replace("fas", "fas");
                            icon.classList.replace("fa-eye-slash", "fa-eye");
                        });
                    } else {
                        pwField.type = "password";
                        pwShowHide.forEach((icon) => {
                            icon.classList.replace("fas", "fas");
                            icon.classList.replace("fa-eye", "fa-eye-slash");
                        });
                    }
                });
            });
        });
    }
}

export function toggleSignUpAndLoginForm() {
    const movieContainer = document.querySelector(".movie-container");
    const signUp = document.querySelector(".movie-signup-link");
    const login = document.querySelector(".movie-login-link");
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