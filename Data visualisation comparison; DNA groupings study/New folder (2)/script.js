function initMap() {

	var england = {
		info: '<strong>england</strong><br>\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 51.5074,
		long: -0.1278
	};

	var scotland = {
		info: '<strong>scotland</strong><br>\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 55.8642,
		long: -4.2518
	};

	var wales = {
		info: '<strong>wales</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 51.4816,
		long: -3.1791
	};

	var roi = {
		info: '<strong>roi</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 53.350140,
		long: -6.266155
	};
	
	var nireland = {
		info: '<strong>roi</strong><br>\r\
					test<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 54.5967,
		long: -5.9301
	};
	
	var locations = [
      [england.info, england.lat, england.long, 0],
      [scotland.info, scotland.lat, scotland.long, 1],
      [wales.info, wales.lat, wales.long, 2],
	  [roi.info, roi.lat, roi.long, 3],
	  [nireland.info, nireland.lat, nireland.long, 4],
	];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: new google.maps.LatLng(51.5074, -0.1278),
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	//var image = {
		//url: './viking.png',
        //  scaledSize: new google.maps.Size(50, 50),
	//};
	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4]),
			//icon: image,
			map: map
			
		})
		;

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
				
			}
		})(marker, i));
		
		
		
		 map.data.loadGeoJson(
          'https://opendata.arcgis.com/datasets/c362832ce5d14728a6fb2b079525be0b_4.geojson');
	  map.data.loadGeoJson('./europegeojson.json');
      map.data.setStyle({
              fillColor: 'red',
              strokeWeight: 0.5
            });
		
		
	}
}