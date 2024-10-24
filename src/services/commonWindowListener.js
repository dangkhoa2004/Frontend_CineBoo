export function setMainContentVisibilityOnScroll() {
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.section');
        //Set when main content of window is revealed
        elements.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 250;//Set reveal point here
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    }
    )
}