//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js


"use strict";



function init_map() {
    var myOptions = {
        zoom: 13,
        scrollwheel: false,
        // draggable: false,
        center: new google.maps.LatLng(60.033435, 30.244630),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    iconSrc = window.location.origin = '/img/marker.png';

    ms0 = new google.maps.Marker({
        position: new google.maps.LatLng(60.033435, 30.244630),
        map: map,
        icon: '/img/marker.png'
    });
}



$(function() {

    if (typeof(google) != 'undefined') {
        google.maps.event.addDomListener(window, 'load', init_map);
    }

    $('.main-carousel').owlCarousel({
        nav: true,
        margin: 15,
        items: 3,
        dots: false
    });

});