$(function () {


    const SECTION = document.querySelectorAll('.section');

    const Fullpage = new fullpage('.content', {
        scrollOverflow: false, // line-height : 1 에서 스크롤 생기는 거 없애줘...
        paddingTop: '1px',
        afterLoad: function (o, d, t) {
            console.log(d.index);
            SECTION.forEach(it => it.classList.remove('on'));
            SECTION[d.index].classList.add('on');
        }
    });


    const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
        speed: 2000,
        fadeEffect: {
            crossFade: true
        },
    });

    const BANNER_SLIDE = new Swiper('.banner_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },

    });

    const BRAND_SLIDE = new Swiper('.brand_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },

    });

    const PREMIUM_SLIDE = new Swiper('.premium_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },

    });
});
