new Swiper('.big_slider_0304', {
    speed: 600,
    navigation: {
        nextEl: '.big_slider_0304__btn_next',
        prevEl: '.big_slider_0304__btn_prev'
    },
    spaceBetween: 25,
    slidesPerView: 1,
    pagination: {
        el: '.big_slider_0304__pagination',
        type: 'fraction',
    },
});

new Swiper('.another_slider_0304', {
    speed: 600,
    navigation: {
        nextEl: '.another_slider_0304__btn_next',
        prevEl: '.another_slider_0304__btn_prev'
    },
    spaceBetween: 25,
    slidesPerView: 'auto',

    breakpoints: {
        960: {
            slidesPerView: 4,
        },
        1500: {
            spaceBetween: 36,
            slidesPerView: 4,
        }
    }
});
new Swiper('.right_slider_0304', {
    speed: 600,
    navigation: {
        nextEl: '.right_slider_0304__btn_next',
        prevEl: '.right_slider_0304__btn_prev'
    },
    spaceBetween: 25,
    slidesPerView: 'auto',

    breakpoints: {
        960: {
            slidesPerView: 1,
        },
    }
});
