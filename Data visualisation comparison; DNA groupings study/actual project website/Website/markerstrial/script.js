var locations = [
	['<strong>The Saxons</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		52.0,
		-0.2, 1, './anglosaxon.png'],
	['<strong>The Irish Celts</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		55.8642,
		-4.2518, 2, './irishceltic.png'],
	['<strong>The Scottish Celts</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		51.4816,
		-3.1791, 3, './scottishcelticcross.png'],
	['<strong>The Scottish Picts</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		52.4816,
		-1.1791, 4, './scottishpics.png'],
	['<strong>The Angles</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		51.4816,
		-6.1791, 5, './anglosaxon.png'],
    ['<strong>The Vikings</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		53.350140,
		-6.266155, 6, './viking.png'],
    ['<strong>The Jutes</strong><br>\test<br>\<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		53.350140,
		-9.266155, 7, './jutes.png']
];
var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 4,
	center: new google.maps.LatLng(51.5074, -0.1278),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4], locations[i][5], locations[i][6], locations[i][7]),
		icon: locations[i][4],
		map: map
	});
	google.maps.event.addListener(marker, 'click', (function (marker, i) {
		return function () {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		}
	})(marker, i));
	
	 map.data.loadGeoJson(
          './Countries_December_2017_Ultra_Generalised_Clipped_Boundaries_in_UK.geojson');
	  map.data.loadGeoJson('./europegeojson.json');
      map.data.setStyle({
              fillColor: 'red',
              strokeWeight: 0.5
            });
	
}
