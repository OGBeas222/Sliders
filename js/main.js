const Header = new Swiper('.header-slider', {
    // Optional parameters
    slidesPerView:1,
    // slidesPerGroup:1,
    initialSlide:0,
    // loop: true,
    // loopedSlides:5,
    // centeredSlides: true,
    // loopFillGroupWithBlank:true,
    spaceBetween:25,
    // roundLengths: true,
    speed: 600,
    //If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    // simulateTouch:true,
});