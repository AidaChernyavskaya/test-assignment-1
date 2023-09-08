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
            if (window.innerWidth < 1500 && window.innerWidth > 1150) {
                return 7;
            } else if (window.innerWidth < 1150 && window.innerWidth > 600) {
                return 5;
            } else if (window.innerWidth < 600) {
                return 3;
            } else {
                return 9;
            }
        default:
            if (window.innerWidth > 1380 || (window.innerWidth < 980 && window.innerWidth > 960)) {
                return 4;
            } else if ((window.innerWidth < 1380 && window.innerWidth > 980) || (window.innerWidth < 960 && window.innerWidth > 740)) {
                return 3;
            } else if (window.innerWidth < 740 && window.innerWidth > 500) {
                return 2
            } else {
                return 1;
            }
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

const saleSlider = () => {
    let arrowPrev;
    let arrowNext;
    if (window.innerWidth > 980) {
        arrowPrev = document.getElementById('sale_prev_center');
        arrowNext = document.getElementById('sale_next_center');
    } else {
        arrowPrev = document.getElementById('sale_prev');
        arrowNext = document.getElementById('sale_next');
    }
    const slides = document.querySelectorAll('.card__sale');

    let visible = countVisibleSlides();
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);
    slider(arrowPrev, arrowNext, from, to, slides);
};

const noveltySlider = () => {
    let arrowPrev;
    let arrowNext;
    if (window.innerWidth > 980) {
        arrowPrev = document.getElementById('novelty_prev_center');
        arrowNext = document.getElementById('novelty_next_center');
    } else {
        arrowPrev = document.getElementById('novelty_prev');
        arrowNext = document.getElementById('novelty_next');
    }
    const slides = document.querySelectorAll('.card__novelty');

    let visible = countVisibleSlides();
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);
    slider(arrowPrev, arrowNext, from, to, slides);
};

const recommendationSlider = () => {
    let arrowPrev;
    let arrowNext;
    if (window.innerWidth > 980) {
        arrowPrev = document.getElementById('recommendation_prev_center');
        arrowNext = document.getElementById('recommendation_next_center');
    } else {
        arrowPrev = document.getElementById('recommendation_prev');
        arrowNext = document.getElementById('recommendation_next');
    }
    const slides = document.querySelectorAll('.card__recommendation');

    let visible = countVisibleSlides();
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);
    slider(arrowPrev, arrowNext, from, to, slides);
};

const promotionSlider = () => {
    let arrowPrev;
    let arrowNext;
    if (window.innerWidth > 980) {
        arrowPrev = document.getElementById('promotion_prev_center');
        arrowNext = document.getElementById('promotion_next_center');
    } else {
        arrowPrev = document.getElementById('promotion_prev');
        arrowNext = document.getElementById('promotion_next');
    }
    const slides = document.querySelectorAll('.card__promotion');

    let visible = countVisibleSlides();
    let from = 0;
    let to = visible - 1;

    toggleActiveClass(slides, to, from);
    slider(arrowPrev, arrowNext, from, to, slides);
};

digitsSlider();
brandsSlider();
saleSlider();
noveltySlider();
recommendationSlider();
promotionSlider();

window.addEventListener('resize', () => {
    digitsSlider();
    brandsSlider();
    saleSlider();
    noveltySlider();
    recommendationSlider();
    promotionSlider();
});