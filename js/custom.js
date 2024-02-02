$(function () {


    const SECTION = document.querySelectorAll('.section');

    const Fullpage = new fullpage('#content', {
        scrollOverflow: false, // line-height : 1 에서 스크롤 생기는 거 없애줘...
        paddingTop: '1px',
        responsiveWidth: 1201,
        onLeave: function (o, d, t) {
            console.log(d.index);
            SECTION.forEach(it => it.classList.remove('on'));
            SECTION[d.index].classList.add('on');

            if (d.index == 0) {
                document.querySelector('.header').classList.remove('on')
            } else {
                document.querySelector('.header').classList.add('on')
            }
        }




    });




    const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
    });

    const BANNER_SLIDE = new Swiper('.banner_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },



    });

    const BRAND_SLIDE = new Swiper('.brand_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    const PREMIUM_SLIDE = new Swiper('.premium_slide', {
        loop: true,

        breakpoints: {
            500: {
                slidesPerView: 1,
                spaceBetween: 40,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },

    });
});
