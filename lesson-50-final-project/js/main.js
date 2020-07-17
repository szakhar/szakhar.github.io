$(document).ready(function() {

// ================================================
//   FIXED MENU
// ================================================

const header = $('.header__box');
let scrollPrev = 0;

if (document.documentElement.clientWidth > 1024) {
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
                header.addClass('header__sticky--out');
        } else if (scrolled <= 100) {
                header.removeClass('header__sticky');
                header.removeClass('header__sticky--out');
        } else {
            header.addClass('header__sticky');
            header.removeClass('header__sticky--out');
        }
        scrollPrev = scrolled;
    });
}



// ================================================
//   FIXED INFO ITEM MENU
// ================================================

const popupInfo = $('.popup-info');

if (document.documentElement.clientWidth > 1024) {
    $('.menu__info').click(function(event) {
        event.preventDefault()
        popupInfo.addClass('visible-popup-info');
        popupInfo.removeClass('hide-popup-info');
    });

    $('.popup-info__close').click(function() {
        popupInfo.removeClass('visible-popup-info');
    });

    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();

        if (scrolled > 300) {
            popupInfo.addClass('hide-popup-info');
        }
    });
}



// ================================================
//   ICON MENU
// ================================================

const headerSticky = $('.header__box');
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu');

iconMenu.addEventListener('click', () => {
    menuBody.classList.toggle('active-icon-menu');

    if (document.documentElement.clientWidth <= 1024) {
        headerSticky.addClass('header__sticky-white');
    }
});



// ================================================
//   HEADER SLIDER
// ================================================

$('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<div class="header__prev"></div>',
    nextArrow: '<div class="header__next"></div>',
    pauseOnHover:false,
    fade: !0,
    cssEase: 'linear',
    speed: 500
});



// ================================================
//   REVIEWS SLIDER
// ================================================

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
    customPaging : function(slider, i) {
        let thumb = $(slider.$slides[i]).data();
        return `<div class="reviews__item"><img src="img/reviews-author-${i + 1}.jpg"></div>`;
    },
});



// ================================================
//   FOOTER INSTAGRAM SLIDER
// ================================================

$('.footer__instagram-list').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover:false,
  speed: 500,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



// ================================================
//   PARALLAX VIDEO
// ================================================

if (document.documentElement.clientWidth > 767) {
    $('.parallaxie').parallaxie();
}

// ================================================
//   CALCULATOR BMI
// ================================================

function calculateBMI(height, weight, age, gender, activity) {
    let bmi = (weight / (height ** 2)) * 10000;
    bmi = bmi.toFixed(1);

    if (bmi !== '' && !isNaN(bmi)) {

        let text = '';

        if (bmi < 18.5) {
            text += `<img class="bmi__icon" src="img/bmi/underweight.png" alt="Underweight">
                     <span class="bmi__result-text">You are Underweight!<span>
                     <span class="bmi__your-bmi">Your BMI is ${bmi}</span>`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            text += `<img class="bmi__icon" src="img/bmi/normal.png" alt="Healthy">
                     <span class="bmi__result-text">You are Healthy!<span>
                     <span class="bmi__your-bmi">Your BMI is ${bmi}</span>`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            text += `<img class="bmi__icon" src="img/bmi/overweight.png" alt="Overweight">
                     <span class="bmi__result-text">You are Overweight!<span>
                     <span class="bmi__your-bmi">Your BMI is ${bmi}</span>`;
        } else {
            text += `<img class="bmi__icon" src="img/bmi/obese.png" alt="Obese">
                     <span class="bmi__result-text">You are Obese!<span>
                     <span class="bmi__your-bmi">Your BMI is ${bmi}</span>`;
        }

        return text;

    } else {
        return '<span class="bmi__result-empty">Please provide a valid height and weight<span>';
    }
}

const resultBMIBox = document.querySelector('.bmi__result-box');
const resultBMI = document.querySelector('.bmi__result');
const bmiResultClose = document.querySelector('.bmi__result-close');

bmiForm.addEventListener('submit', event => {
    event.preventDefault();

    const height = +bmiForm.elements.height.value;
    const weight = +bmiForm.elements.weight.value;
    const age = +bmiForm.elements.age.value;
    const gender = bmiForm.elements.gender.value;
    const activity = bmiForm.elements.activity.value;

    resultBMIBox.classList.add('bmi__active');
    resultBMI.innerHTML = calculateBMI(height, weight, age, gender, activity);
});


bmiResultClose.addEventListener('click', () => {
    resultBMIBox.classList.remove('bmi__active');
});


});



// ================================================
//   TABS
// ================================================

$('.classes__item:first-child').addClass('classes__active');
$('.classes__table-box').hide(0);
$('.classes__table-box:first').show(0);

$('.classes__item').click(function(event) {
    $('.classes__item').removeClass('classes__active');
    $(this).addClass('classes__active');

    const activeTab = $(this).find('a').attr('href');
    $('.classes__table-box').hide();
    $(activeTab).fadeIn(300);
    return false;
});



// ================================================
//   GOOGLE MAPS
// ================================================

function initMap() {

    // Map options
    const position = { lat: 40.695525, lng: -73.827567 };
    const options = {
        center: position,
        zoom: 13,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    }

    // New map
    const map = new google.maps.Map(document.querySelector('#map'), options);

    // Add Marker
    const marker = new google.maps.Marker({
        position,
        map,
        icon: 'img/icons/marker.png'
    });
    
    // Info Window
    const info = new google.maps.InfoWindow({
        content: '<div style="padding: 10px 0; color:#7b7b7b;">South Richmond Hill Queens, NY USA</div>'
    });
    
    // Click open to window
    marker.addListener('click', () => {
        info.open(map, marker);
    })

}



// ================================================
//   OPEN POPUP. Event function in html
// ================================================

function openPopup() {
    const popupBg = document.querySelector('.parallax-video__bg');
    const popup = document.querySelector('.parallax-video__video');
    popupBg.classList.toggle('visible');
    popup.classList.toggle('visible');
}
  
// Close pop up
const closePopupBg = document.querySelector('.parallax-video__bg');

closePopupBg.addEventListener('click', function(event) {
    const close = !event.target.closest('.parallax-video__video');
    closePopupBg.style.cursor = 'url(../img/icons/cursor.svg), auto';

    if (close) {
        openPopup();
    }
});