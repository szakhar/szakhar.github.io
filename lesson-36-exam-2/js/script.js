$(document).ready(function() {

// ================================================
//   SLICK SLIDER
// ================================================

$(".slider").slick({
    infinite: true,
    dots: true,
    vertical: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    easing: 'ease',
    waitForAnimate: false
});

$(".slider-news").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    easing: 'ease',
    waitForAnimate: false,
    initialSlide: 0,
    variableWidth: true,
});


// ================================================
//   ICON MENU
// ================================================

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});


const menuList = document.querySelector('.menu__list');

menuList.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});


// ================================================
//   STICKY HEADER
// ================================================

$(document).scroll(function (event) {
    let scroll = $(document).scrollTop();
    
    if(scroll >= 42) {
        $('.header__top').css({
            'position': 'fixed',
            'background-image': 'linear-gradient( 45deg, rgb(85,183,255) 0%, rgb(126,90,255) 100%)'
        });
        $('.top__container').css('margin', '0 auto');
    } else {
        $('.header__top').css({
            'position': 'absolute',
            'background-image': 'none'
        });
        $('.top__container').css('margin', '42px auto');
    }

    // Меню, щоб працювало при прокрутці
    if (scroll <= 440) {
        $('.menu__item').removeClass('active-menu');
        $('.menu__item:eq(0)').addClass('active-menu');
    } else if (scroll <= 1898) {
        $('.menu__item').removeClass('active-menu');
        $('.menu__item:eq(1)').addClass('active-menu');
    } else if (scroll <= 3903) {
        $('.menu__item').removeClass('active-menu');
        $('.menu__item:eq(2)').addClass('active-menu');
    } else if (scroll <= 4700) {
        $('.menu__item').removeClass('active-menu');
        $('.menu__item:eq(3)').addClass('active-menu');
    }
});


// ================================================
//   SCROLL
// ================================================

$('.menu__item').click(function(event) {
    scrollToAnchor(this, event);
});

$('.arrow-down__link').click(function(event) {
    scrollToAnchor(this, event);
});

function scrollToAnchor(current, event) {
    event.preventDefault();
    const target = $( $(current).attr('href') );

    if (target.length) {
        // 80 - це мінус висота полоски хедера
        const scrollTo = target.offset().top - 80;
        $('html, body').animate({scrollTop: scrollTo + 'px'}, 800);
    }
}


});


// ================================================
//   GOOGLE MAPS
// ================================================

function initMap() {
    // Map options
    const position = { lat: 40.677979, lng: -73.937380 };
    const options = {
        center: position,
        center: { lat: 40.673030, lng: -73.932167 },
        zoom: 15,
        disableDefaultUI: true,
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
        ]}

    // New map
    const map = new google.maps.Map(document.querySelector('#map'), options);

    // Add Marker
    const marker = new google.maps.Marker({
        position,
        map,
        icon: 'img/marker.png'
    });
}

google.maps.event.addDomListener(window, 'load', initMap);