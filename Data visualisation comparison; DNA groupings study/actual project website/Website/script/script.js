function initMap() {

	var england = {
		info: '<strong>England</strong><br>\
					England has been a hub of settlements from Homo Sapiens just after the last Ice Age, to the Celtic peoples from the Iberian Peninsula to the Romans in ad 43 from what is now italy, through to the Germanic and Viking peoples in the late 1st Millenia ad. The last successful invasion was by the Normans landing at Pevensia in 1066. The lastest large economic immigration levels from those settling from outside the UK have been from what was part of the British Empires colonial countries.<br>\
					<a href="https://beta.visitengland.com/things-to-do/heritage">Historic England</a>',
		lat: 51.5074,
		long: -0.1278
	};

	var scotland = {
		info: '<strong>Scotland</strong><br>\
					Scotland at the time of the Roman invasion in 43 ad, was split between the West Celts and the Eastern Picts. The tribes were split through the grampians East and West. The Celts joined the protection of the Picts from the advancing Britons and the Picts married into the Vikings to get some peace. There is not much written records of the Celts but even less from the Picts. Scotland was the centre of many violent invasions and settlement attempts over the course of nearly 2 Millenia.<br>\
					<a href="https://members.historic-scotland.gov.uk/places">Historic Scotland</a>',
		lat: 55.8642,
		long: -4.2518
	};

	var wales = {
		info: '<strong>Wales</strong><br>\r\
					The Welsh are part of the Briton tribes which lastly inhabitied Cornwall and Devon, "Old Wales" (which was Wales today and further into the England), and parts of Northern/North West England. There were other Briton tribes such as Bucdicas who famously battled the Romans. Part of the tales and fables of the Britons battling invaders was the story of Arthur and the Sword. <br>\
					<a href="https://cadw.gov.wales/daysout/maps-and-itineraries/?lang=en">Historic Wales</a>',
		lat: 51.4816,
		long: -3.1791
	};

	var roi = {
		info: '<strong>ROI</strong><br>\r\
					Ireland was central the largest Celtic stronghold from the Romans in 43 ad as the Romans started to conquer England, Wales and attempts on the Pictish lands in Scotland. The Romans thought about invading Ireland, but it was left as a dream. The Vikings gained several strongholds in Ireland with little resistance. From 1160s there was a Norman-Anglo invasion of Leinster in Ireland with help from other Irish warriors and also Welsh (Britons) warriors to help a local warlord, later one of the King of England and Normandys Son John became High King of England and Ireland.<br>\
					<a href="http://www.heritageireland.ie/en/">Historic Ireland"</a>',
		lat: 53.350140,
		long: -6.266155
	};
	
	var nireland = {
		info: '<strong>N.Ireland</strong><br>\r\
					Northern Ireland was part of the 1922 remapping of Ireland when it became part of GB and Northern Ireland. It was also part the major settling places for Viking explorer after the sacking of Lindefarne in England.<br>\
					<a href="https://discovernorthernireland.com/things-to-do/attractions/castles/castles-and-historic-sites/">Historic N.Ireland</a>',
		lat: 54.5967,
		long: -5.9301
	};
	
	var germany = {
		info: '<strong>Germany</strong><br>\r\
					Germany was once lived in by multiple tribes. The ones that came to the UK, were the Angles, the Saxons, the Frisians and the Jutes. The Jutes lived in what was a Viking and Germanic stronghold it was split almost exactly through the centre of what is now Demnamrk. The Frisians, Angles and Saxons all also lived in Northern Germany.<br>\
					<a href="http://www.historicgermany.travel/">Historic Germany</a>',
		lat: 53.637581,
		long: 10.451019
	};
	
	var france = {
		info: '<strong>France</strong><br>\r\
					France was split into different tribes or Kingdoms throughout its history like most countries inthe world, with modern countries only being formed in very recent modern history. The French Celt tribes settled in the UK and Ireland and later the Normans who were King Rollos decendants were called Normans - Northmen - because they actually came from Vikings homelands.<br>\
					<a href="https://www.france-voyage.com/tourism/histoire-panorama.htm">Historic France</a>',
		lat: 49.676633,
		long: 0.666344
	};
	
	var spain = {
		info: '<strong>Spain</strong><br>\r\
					The Spanish Celts who moved into France settled in the UK. The Spanish went from "Paganism" to Christianity to Islam then back to Christianity, being settled by various invaders over time.<br>\
					<a href="https://www.triphistoric.com/explore/articles/historic-sites-in-spain">Historic Spain</a>',
		lat: 42.152568,
		long: -2.238701
	};
	
	var norway = {
		info: '<strong>Norway</strong><br>\r\
					Norway was home to the Vikings as well as Sweden. They were great seafaring folk settling all the way down rivers to Italy and the Mediterranean and the Black Sea. With recent Archeaology showing settlements in North America. They settled large swathes of England, Scotland and Ireland.<br>\
					<a href="https://www.visitnorway.com/places-to-go/">Historic Norway</a>',
		lat: 58.225575,
		long: 7.395827
	};
	
	var denmark = {
		info: '<strong>Denmark</strong><br>\r\
					Today, Denmark sits on the old Country of Jutland and on the Cimbrian Peninsula. It was split between the Jutes and the Vikings that inhabitated what is now Northern Denmark. The settled most of Eastern and North Eastern England.<br>\
					<a href="https://denmark.dk/people-and-culture">Historic Denmark</a>',
		lat: 56.243696,
		long: 9.257147
	};
	
	var holland = {
		info: '<strong>Holland</strong><br>\r\
					The Netherlands was part of the Germanic country which included Angles, Saxons, Jutes and Frisians. It was called Frisia or Frisland. They made some settlements in England.<br>\
					<a href="https://www.holland.com/global/tourism.htm">Historic Holland</a>',
		lat: 52.462622,
		long: 5.709566
	};
	
	var belgium = {
		info: '<strong>Belgium</strong><br>\r\
					Belgium was part of the Germanic country which included Angles, Saxons, Jutes and Frisians. It was called Eastern Frisia or Frisland. They made some settlements in England.<br>\
					<a href="https://theculturetrip.com/europe/belgium/articles/the-most-significant-historical-sites-in-belgium/">Historic Belgium</a>',
		lat: 50.943570,
		long: 3.447822
	};
	
	var italy = {
		info: '<strong>Italy</strong><br>\r\
					Romans who get their name from the central controlling part of the Roman Empire, Rome, made several attempts to invade Britian but were at first foiled by the Channel sea. They eventually made a footprint into Britian by 43 ad. They conquered most territories in the Britian but never settled in Ireland. The provided good and reliable documentation at the time they were there. There is little evidence to suggest they intermarried on a large scale therefore DNA evidence is scarce and will nto be featured to any high degree in the study.<br>\
					<a href="https://archaeology-travel.com/destinations/europe/italy/rome/">Historic Rome</a>',
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
	  map.data.loadGeoJson('script/europegeojson.json');
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