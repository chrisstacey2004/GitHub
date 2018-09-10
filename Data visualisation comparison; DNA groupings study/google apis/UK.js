var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: {lat:  53.483959, lng: -2.244644}
});
  //var marker = new google.maps.Marker({position: london, map: map});
  map.data.loadGeoJson(
      'https://opendata.arcgis.com/datasets/c362832ce5d14728a6fb2b079525be0b_4.geojson');
  map.data.loadGeoJson('markers.json');
      map.data.setStyle({
          fillColor: 'green',
          strokeWeight: 0.5
        });
        }

//var map;
//function initMap() {
//  map = new google.maps.Map(document.getElementById('map'), {
  //  zoom: 4,
  //  center: {lat: -28, lng: 137}
  //});

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.

//}
