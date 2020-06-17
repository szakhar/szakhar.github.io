$(document).ready(function() {


// Header Slider
$('.header__slider').slick({
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<div class="header__prev"></div>',
    nextArrow: '<div class="header__next"></div>',
    pauseOnHover:false,
    // fade: true,
    // cssEase: 'ease',
    fade: !0,
    cssEase: 'linear',
    speed: 500
});


// Reviews Slider
$('.reviews__body').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    prevArrow: '<div class="reviews__prev"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="22"><polyline points="12.5,22.1 1.9,11.5 12.5,0.9"></polyline></svg></div>',
    nextArrow: '<div class="reviews__next"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="22"><polyline points="1.9,22.1 12.5,11.5 1.9,0.9"></polyline></svg></div>',
    // fade: true,
    customPaging : function(slider, i) {
        let thumb = $(slider.$slides[i]).data();
        return `<div class="reviews__item"><img src="img/reviews-author-${i + 1}.jpg"></div>`;
    },
});


// Parallax video
$('.parallaxie').parallaxie();

});