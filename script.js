const countVisibleSlides = (pageBlock = '') => {
    switch (pageBlock) {
        case 'digits':
            return window.innerWidth > 850 ? 6 : 4;
        default:
            return window.innerWidth > 850 ? 6 : 3;
    }
};

const toggleActiveClass = (slides, to, from) => {
    slides.forEach((slide, index) => {
        index <= to && index >= from ? slide.classList.add('active') : slide.classList.remove('active');
    });
};

const digitsSlider = () => {
    const arrowPrev = document.getElementById('digits_prev');
    const arrowNext = document.getElementById('digits_next');
    const slides = document.querySelectorAll('.digit');

    let visible = countVisibleSlides('digits');
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);

    arrowPrev.addEventListener('click', () => {
        if (from - 1 >= 0) {
            arrowNext.classList.remove('arrow__disactive');
            from -= 1;
            to -= 1;
            toggleActiveClass(slides, to, from);
        } else {
            arrowPrev.classList.add('arrow__disactive');
        }
    });

    arrowNext.addEventListener('click', () => {
        if (to + 1 < slides.length) {
            arrowPrev.classList.remove('arrow__disactive');
            to += 1;
            from += 1;
            toggleActiveClass(slides, to, from);
        } else {
            arrowNext.classList.add('arrow__disactive');
        }
    });

};

digitsSlider();

window.addEventListener('resize', () => {
    digitsSlider();
});