//UniversalSpatialDataMapper Javascript

// set up the map center and zoom level
var map = L.map('map', {
  center: [42, -92],
  zoom: 4, 
  zoomControl: false, 
  scrollWheelZoom: true
});

// link to view source code
map.attributionControl
.setPrefix('View <a href="https://github.com/northlandco/UniveralSpatialDataMapper">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

L.Control.geocoder({position: "topleft"}).addTo(map);

L.control.scale().addTo(map);

// Zoom Label
L.control.zoomLabel({position: "topright"}).addTo(map);

// Reposition zoom control
L.control.zoom({position: "topright"}).addTo(map);

//add legend to toggle any baselayers and/or overlays
// global variable with (null, null) allows indiv layers to be added inside functions below
var controlLayers = L.control.layers( null, null, {
  position: "bottomright", // suggested: bottomright for CT (in Long Island Sound); topleft for Hartford region
  collapsed: false // false = open by default
}).addTo(map);

//Coordinate Control for map construction
var c = new L.Control.Coordinates();
c.addTo(map);
map.on('click', function(e) {
	c.setCoordinates(e);
});

/* BASELAYERS */
var lightAll = new L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map); // adds layer by default
controlLayers.addBaseLayer(lightAll, 'CartoDB LightAll');

// Esri satellite map from http://leaflet-extras.github.io/leaflet-providers/preview/
// OR use esri-leaflet plugin and esri basemap name https://esri.github.io/esri-leaflet/examples/switching-basemaps.html
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
controlLayers.addBaseLayer(Esri_WorldImagery, 'Esri World Imagery');



/* POINT OVERLAYS */

// All Airports
$.getJSON("src/Airports464.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/airportlogo.png",
    iconRetinaUrl: 'src/airportlogo.png',
    iconSize: [18, 18]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.coordinates); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'Airports');
});

// International Airports (Python Computed)
$.getJSON("src/internationalairports.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/internationalairportlogo.png",
    iconRetinaUrl: 'src/internationalairportlogo.png',
    iconSize: [18, 18]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.coordinates); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'Intl. Airports');
});

// General Hospitals (Python Computed)
$.getJSON("src/generalhospitals.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/hospital-18.png",
    iconRetinaUrl: 'src/hospital-18@2x.png',
    iconSize: [18, 18]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.facility_name); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'General Hospitals');
});

// NHL Arenas (Python Computed --> Shp to Geojson)
$.getJSON("src/NHLarenas.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/nhlarenalogo.png",
    iconRetinaUrl: 'src/nhlarenalogo.png',
    iconSize: [15, 15]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.coordinates); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'NHL Arenas');
});

// First Nations (OpenCanada) (Python Computed --> Shp to Geojson)
$.getJSON("src/firstnations.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/firstnationlogo.png",
    iconRetinaUrl: 'src/firstnationlogo.png',
    iconSize: [12, 12]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.coordinates); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'First Nations');
});

// NFL Stadiums (Python Computed --> CSV to GeoJson)
$.getJSON("src/nflstadiums.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/nflstadiumlogo.png",
    iconRetinaUrl: 'src/nflstadiumlogo.png',
    iconSize: [12, 12]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.Team); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'NFL Stadiums');
});

// Mining68 (Python Computed --> Shp to Geojson)
$.getJSON("src/mining68.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/nhlarenalogo.png",
    iconRetinaUrl: 'src/mininglogo.png',
    iconSize: [15, 15]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.coordinates); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'Mining Sites');
});

// Mining68 (Python Computed --> Shp to Geojson)
$.getJSON("src/mlbstadiums.geojson", function (data){
  var iconStyle = L.icon({
    iconUrl: "src/baseballlogo.png",
    iconRetinaUrl: 'src/baseballlogo.png',
    iconSize: [15, 15]
  });
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng,{icon: iconStyle});
      marker.bindPopup(feature.properties.coordinates); // replace with properties data label from your GeoJSON file if applicable
      return marker;
    }
  }); // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'MLB Stadiums');
});







/* POLYGON and POLYLINE OVERLAYS */
// Ways to load geoJSON polygon layers from local directory or remote server
// Different options for styling and interactivity

//National Parks
$.getJSON("src/newnationalparks.geojson", function (data){
  var geoJsonLayer = L.geoJson(data, {
    style: function (feature) {
      return {
        'color': 'purple',
        'weight': 2,
      }
    },
    onEachFeature: function( feature, layer) {
      layer.bindPopup(feature.properties.NAME_E) // change to match your geojson property labels
    }
  });  
  controlLayers.addOverlay(geoJsonLayer, 'National Parks');
});

//CMA Boundaries
$.getJSON("src/CMABoundary.geojson", function (data) {   
  var geoJsonLayer = L.geoJson(data, {
    style: function (feature) {
      return {
        'color': 'red',
        'weight': 2,
        'fillColor': '#fff',
        'fillOpacity': 0
      }
    },
    onEachFeature: function( feature, layer) {
      layer.bindPopup(feature.properties.CMA_NAME) // replace with properties data label from your GeoJSON file if applicable
    }
  });  // insert ".addTo(map)" to display layer by default
  controlLayers.addOverlay(geoJsonLayer, 'CMA Boundary'); 
});


