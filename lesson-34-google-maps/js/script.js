// Создать карту с возможностью прокладывать маршрут от точки A к точке B.
// Адреса вводятся в два поля и при нажатии на кнопку “Проложить маршрут” на карте показывается маршру

function initMap() {
    // Для прокладки маршруту
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    // Map options
    const position = { lat: 48.9215, lng: 24.70972 };
    const options = {
        center: position,
        zoom: 10,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
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
        icon: 'img/unicorn.png',
        animation: google.maps.Animation.BOUNCE
    });
    // function addMarker() {
    //     const marker = new google.maps.Marker({
    //         position,
    //         map,
    //         icon: 'img/unicorn.png',
    //         animation: google.maps.Animation.BOUNCE
    //     });
    // }
    // addMarker();

    
    // Info Window
    const info = new google.maps.InfoWindow({
        content: '<h3 style="color: #333;">Ну шо, давай прокладай вже свій маршрут</з>'
    });

    // Постійно відкрите вікно
    // info.open(map, marker);
    
    // По кліку відкривається вікно
    marker.addListener('click', () => {
        info.open(map, marker);
    })


    // Прокладка маршруту
    form.addEventListener('submit', event => {
        event.preventDefault();

        const origin = form.origin.value;
        const destination = form.destination.value;

        const request = {
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(Date.now()),
                trafficModel: 'optimistic'
            }
        };
        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            }
        });
        directionsRenderer.setMap(map);

        // Видаляє маркер коли прокладається маршрут
        marker.setMap(null);
    });

}

// google.maps.event.addDomListener(window, 'load', initMap);