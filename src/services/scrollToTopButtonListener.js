// const scrollToTopButton = document.getElementById("scrollToTop");

export function setScrollToTopButtonAction() {

    //Must be run after DOM is rendered fully
    document.addEventListener('DOMContentLoaded', () => {
        const scrollToTopButton = document.getElementById("scrollToTop");
        if (scrollToTopButton) {
            scrollToTopButton.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    });
}


export function setScrollToTopVisibility() {
    document.addEventListener('DOMContentLoaded', () => {
        const scrollToTopButton = document.getElementById("scrollToTop");
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
        })
    });
}