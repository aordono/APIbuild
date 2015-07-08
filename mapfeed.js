var map;
var infowindow;
var i;

// map coordinates for markers
var tattooStudios = [
  ['Skintricate', 43.582636, -79.714616],
  ['Lighthouse Tattoo', 43.559329, -79.577193],
  ['Forever Young Ink', 43.647634, -79.401975,],
  //['Pearl Harbor Gift Shop', 43.653695, -79.400238],
  ['Gastown Tattoo Parlour', 49.283051, -123.106923],
  //['Adorned Precision Body Arts', 49.274443, -123.069325],
  ['Atomic Zombie Tattoo', 53.542313, -113.536192],
];

//  global instafeed variables
  skintricate = new Instafeed({
  accessToken: '13405188.467ede5.adc15df91eea40ef8a6708a69057c803',
  clientId: '302cd41d3d3040449163c93647d6939d',
  get: 'location',
  locationId: 33799250,
  });
  //skintricate.run();
  
  lighthouse = new Instafeed({
  accessToken: '13405188.467ede5.adc15df91eea40ef8a6708a69057c803',
  clientId: '302cd41d3d3040449163c93647d6939d',
  get: 'location',
  locationId: 4946451,
  });
  //lighthouse.run();

  fyink = new Instafeed({
  accessToken: '13405188.467ede5.adc15df91eea40ef8a6708a69057c803',
  clientId: '302cd41d3d3040449163c93647d6939d',
  get: 'location',
  locationId: 18867701,
  });
  //fyink.run();

  gastown = new Instafeed({
  accessToken: '13405188.467ede5.adc15df91eea40ef8a6708a69057c803',
  clientId: '302cd41d3d3040449163c93647d6939d',
  get: 'location',
  locationId: 3704512,
  });
  //gastown.run();

  atomiczombie = new Instafeed({
  accessToken: '13405188.467ede5.adc15df91eea40ef8a6708a69057c803',
  clientId: '302cd41d3d3040449163c93647d6939d',
  get: 'location',
  locationId: 1603721,
  });
  //atomiczombie.run();

  

  //var tattooFeeds = ['skintricate.run();', 'lighthouse.run();', 'fyink.run();', 'gastown.run();', 'atomiczombie.run();'];


function initialize() {
  var mississauga = new google.maps.LatLng(43.5890452,-79.6441198);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: mississauga,
    zoom: 5
  });

  var styles = [
  {
    stylers: [
      { saturation: -100 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

map.setOptions({styles: styles});

  var request = {
    location: mississauga,
    radius: 500,
    types: ['tattoo']
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  var infowindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < tattooStudios.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(tattooStudios[i][1], tattooStudios[i][2]),
            map: map
          
        }); 
        google.maps.event.addListener(marker, 'click', (function selectStudio(marker, i) {
            return function() {
                infowindow.setContent(tattooStudios[i][0][skintricate.run()]);
                infowindow.setContent(tattooStudios[i][1][lighthouse.run()]);
                infowindow.setContent(tattooStudios[i][2][fyink.run()]);
                infowindow.setContent(tattooStudios[i][3][gastown.run()]);
                infowindow.setContent(tattooStudios[i][4][atomiczombie.run()]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

google.maps.event.addDomListener(window, 'load', initialize);