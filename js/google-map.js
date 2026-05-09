(function($) {
    "use strict";

    google.maps.event.addDomListener(window, 'load', init);

    function init() {

        // YOUR LOCATION COORDINATES
        var latitude = 22.3546882;
        var longitude = 73.2176563;

        // MAP OPTIONS
        var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 15,
            zoomControl: true,
            panControl: false,
            mapTypeControl: false,
            scaleControl: true,
            scrollwheel: false,
            streetViewControl: false,
            draggable: true,
            overviewMapControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // MAP DIV
        var mapElement = document.getElementById('mapBox');

        // CREATE MAP
        var map = new google.maps.Map(mapElement, mapOptions);

        // MARKER
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            icon: 'images/map-marker.png'
        });

        // POPUP CONTENT
        var contentString =
            '<div id="content">' +
                '<div class="mapInfoWindowRowInner">' +
                    '<h5>Firemart.in</h5>' +
                    '<p>Vadodara, Gujarat, India</p>' +
                '</div>' +
            '</div>';

        // INFO WINDOW
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // OPEN POPUP AUTOMATICALLY
        infowindow.open(map, marker);

        // OPEN POPUP ON CLICK
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }

})(jQuery);