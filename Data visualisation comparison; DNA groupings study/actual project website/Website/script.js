function initMap() {

	var england = {
		info: '<strong>England</strong><br>\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 51.5074,
		long: -0.1278
	};

	var scotland = {
		info: '<strong>Scotland</strong><br>\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 55.8642,
		long: -4.2518
	};

	var wales = {
		info: '<strong>Wales</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 51.4816,
		long: -3.1791
	};

	var roi = {
		info: '<strong>ROI</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 53.350140,
		long: -6.266155
	};
	
	var nireland = {
		info: '<strong>N.Ireland</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 54.5967,
		long: -5.9301
	};
	
	var germany = {
		info: '<strong>Germany</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 53.637581,
		long: 10.451019
	};
	
	var france = {
		info: '<strong>France</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 49.676633,
		long: 0.666344
	};
	
	var spain = {
		info: '<strong>Spain</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 42.152568,
		long: -2.238701
	};
	
	var norway = {
		info: '<strong>Norway</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 58.225575,
		long: 7.395827
	};
	
	var denmark = {
		info: '<strong>Denmark</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 56.243696,
		long: 9.257147
	};
	
	var holland = {
		info: '<strong>Holland</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 52.462622,
		long: 5.709566
	};
	
	var belgium = {
		info: '<strong>Belgium</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 50.943570,
		long: 3.447822
	};
	
	var italy = {
		info: '<strong>Italy</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 41.471818,
		long: 13.175234
	};
	
	var locations = [
      [england.info, england.lat, england.long, 0],
      [scotland.info, scotland.lat, scotland.long, 1],
      [wales.info, wales.lat, wales.long, 2],
	  [roi.info, roi.lat, roi.long, 3],
	  [nireland.info, nireland.lat, nireland.long, 4],
	  [germany.info, germany.lat, germany.long, 5],
	  [france.info, france.lat, france.long, 6],
	  [spain.info, spain.lat, spain.long, 7],
	  [norway.info, norway.lat, norway.long, 8],
	  [denmark.info, denmark.lat, denmark.long, 9],
	  [holland.info, holland.lat, holland.long, 10],
	  [belgium.info, belgium.lat, belgium.long, 11],
	  [italy.info, italy.lat, italy.long, 12],
	];

	
	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: new google.maps.LatLng(51.5074, -0.1278),
		mapTypeId: google.maps.MapTypeId.HYBRID
	});


	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4]),
			map: map
			
		})
		;

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
				
			}
		})(marker, i));
		
		
      
		
	  map.data.loadGeoJson('https://opendata.arcgis.com/datasets/c362832ce5d14728a6fb2b079525be0b_4.geojson');
	  map.data.loadGeoJson('./europegeojson.json');
      map.data.setStyle({
  fillColor: 'green',
  strokeWeight: 0.5,
  
});

		var lineSymbol = {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        };

        // Create the polyline and add the symbol via the 'icons' property.
        var line = new google.maps.Polyline({
          path: [{lat: 22.291, lng: 153.027}, {lat: 18.291, lng: 153.027}],
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
          map: map
        });
	}
}