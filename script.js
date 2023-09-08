const countVisibleSlides = (pageBlock = '') => {
    switch (pageBlock) {
        case 'digits':
            if (window.innerWidth < 590) {
                return 2;
            } else if (window.innerWidth > 850) {
                return 6;
            } else {
                return 4;
            }
        case 'brands':
            if (window.innerWidth < 1300 && window.innerWidth > 1150) {
                return 7;
            } else if (window.innerWidth < 1150 && window.innerWidth > 600) {
                return 5;
            } else if (window.innerWidth < 600) {
                return 3;
            }
        default:
            return window.innerWidth > 850 ? 6 : 3;
    }
};

const toggleActiveClass = (slides, to, from) => {
    slides.forEach((slide, index) => {
        index <= to && index >= from ? slide.classList.add('active') : slide.classList.remove('active');
    });
};

const slider = (arrowPrev, arrowNext, from, to, slides) => {
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
}

const digitsSlider = () => {
    const arrowPrev = document.getElementById('digits_prev');
    const arrowNext = document.getElementById('digits_next');
    const slides = document.querySelectorAll('.digit');

    let visible = countVisibleSlides('digits');
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);
    slider(arrowPrev, arrowNext, from, to, slides);
};

const brandsSlider = () => {
    const arrowPrev = document.getElementById('brands_prev');
    const arrowNext = document.getElementById('brands_next');
    const slides = document.querySelectorAll('.brand');

    let visible = countVisibleSlides('brands');
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);
    slider(arrowPrev, arrowNext, from, to, slides);
}

digitsSlider();
brandsSlider();

window.addEventListener('resize', () => {
    digitsSlider();
    brandsSlider();
});