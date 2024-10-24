export function hoverBookingInfo(){
    document.addEventListener('DOMContentLoaded', function () {
        const movieCheckout = document.querySelector('.movie_checkout_details');
        const targetElement = document.getElementById('time-to-fixed');

        window.addEventListener('scroll', function () {
            if (targetElement) { // Check if targetElement exists
                const targetPosition = targetElement.getBoundingClientRect().top;
                if (targetPosition <= window.innerHeight) {
                    movieCheckout.classList.add('fixed');
                } else {
                    movieCheckout.classList.remove('fixed');
                }
            }
        });
    });
}