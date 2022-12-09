jQuery(function(){
    'use strict';

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav: true,
        dots: false,
        center: true,
        navContainerClass: "banner__nav",
        navClass: ['banner__nav__prev-btn', 'banner__nav__next-btn'],
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    })
})