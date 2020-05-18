// ================================================
//   SLICK SLIDER
// ================================================

$(document).ready(function(){
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
});



// ================================================
//   ICON MENU
// ================================================





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
      const scrollTo = target.offset().top;
      $('html, body').animate({scrollTop: scrollTo + 'px'}, 800);
    }
}


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