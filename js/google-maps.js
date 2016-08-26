

var map;

function init() {
  var myLatlng = new google.maps.LatLng(40.1863790,-8.4161030);
    var mapOptions = {
		center: myLatlng,
		zoom: 10,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		},
		scaleControl: false,
		scrollwheel: false,
		streetViewControl: false,
		draggable : true,
		overviewMapControl: true,
		overviewMapControlOptions: {
		    opened: false,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
		{
		  featureType: "landscape",
		  stylers: [
		    { saturation: -100 },
		    { lightness: 65 },
		    { visibility: "on" }
		  ]
		},{
		  featureType: "poi",
		  stylers: [
		    { saturation: -100 },
		    { lightness: 51 },
		    { visibility: "simplified" }
		  ]
		},{
		  featureType: "road.highway",
		  stylers: [
		    { saturation: -100 },
		    { visibility: "simplified" }
		  ]
		},{
		  featureType: "road.arterial",
		  stylers: [
		    { saturation: -100 },
		    { lightness: 30 },
		    { visibility: "on" }
		  ]
		},{
		  featureType: "road.local",
		  stylers: [
		    { saturation: -100 },
		    { lightness: 40 },
		    { visibility: "on" }
		  ]
		},{
		  featureType: "transit",
		  stylers: [
		    { saturation: -100 },
		    { visibility: "simplified" }
		  ]
		},{
		  featureType: "administrative.province",
		  stylers: [
		    { visibility: "off" }
		  ]
		},{
		  featureType: "water",
		  elementType: "labels",
		  stylers: [
		    { visibility: "on" },
		    { lightness: -25 },
		    { saturation: -100 }
		  ]
		},{
		  featureType: "water",
		  elementType: "geometry",
		  stylers: [
		    { hue: "#ffff00" },
		    { lightness: -25 },
		    { saturation: -97 }
		  ]
		}
		],
	}

	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title: 'Hello World!'
	});

}

google.maps.event.addDomListener(window, 'load', init);