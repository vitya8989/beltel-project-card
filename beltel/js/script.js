let slider0304;

if (window.innerWidth <= 959) {
    slider0304 = new Swiper('.slider_0304', {
        slidesPerView: 'auto',
        spaceBetween: 25,
    });
} else {
    slider0304 = new Swiper('.slider_0304', {
        navigation: {
            nextEl: '.slider_0304__btn_next',
            prevEl: '.slider_0304__btn_prev'
        },
        spaceBetween: 25,
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
    });
}

let review0304ImgWr = document.querySelector('.review_0304__img_wr');
let review0304Info = document.querySelector('.review_0304__info');
let review0304Author = document.querySelector('.review_0304__author');

if (window.innerWidth <= 639) {
    review0304ImgWr.append(review0304Author);
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 639) {
        review0304ImgWr.append(review0304Author);
    } else {
        review0304Info.append(review0304Author);
    }
    if (window.innerWidth <= 959) {
        slider0304.destroy();
        slider0304 = new Swiper('.slider_0304', {
            slidesPerView: 'auto',
            spaceBetween: 25,
        });
    } else {
        slider0304.destroy();
        slider0304 = new Swiper('.slider_0304', {
            navigation: {
                nextEl: '.slider_0304__btn_next',
                prevEl: '.slider_0304__btn_prev'
            },
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
                rows: 2,
            },
        });
    }
});

