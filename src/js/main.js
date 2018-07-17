//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js
//= ../../bower_components/remodal/dist/remodal.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.js



"use strict";

function init_map() {
    var myOptions = {
        zoom: 13,
        scrollwheel: false,
        // draggable: false,
        center: new google.maps.LatLng(60.159938, 30.552295),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    iconSrc = window.location.origin = '/img/marker.png';

    ms0 = new google.maps.Marker({
        position: new google.maps.LatLng(60.159938, 30.552295),
        map: map,
        icon: '/img/marker.png'
    });
}


function qa() {

	$('.qa__button').on('click', function(e){
		e.preventDefault();

		var findEl = $(this).parent().parent();

		findEl.find('.qa__circle').addClass('qa__circle--open');
		findEl.find('.qa__full').addClass('qa__full--open');

	});

	$('.qa__button--curtail').on('click', function(e){
		e.preventDefault();

		$(this).parent().parent().find('.qa__circle').removeClass('qa__circle--open');
		$(this).parent().parent().find('.qa__full').removeClass('qa__full--open');

	});
}


$(function() {

	qa();

    if (typeof(google) != 'undefined') {
        google.maps.event.addDomListener(window, 'load', init_map);
    }

    $('.main-carousel').owlCarousel({
        nav: true,
        margin: 15,
        items: 3,
        dots: false
    });

    $('[data-remodal-id=modal]').remodal();

    $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
