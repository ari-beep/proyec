document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const backButton = document.querySelector('.back');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function backSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    backButton.addEventListener('click', () => {
        backSlide();
        resetInterval();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
    }

    let interval = setInterval(nextSlide, 6000);
    showSlide(currentSlide);
});
