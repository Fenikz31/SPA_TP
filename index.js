// const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

// mapboxgl.accessToken = 'pk.eyJ1IjoiZmVuaWt6IiwiYSI6ImNqeTduZXl5cDAxOTIzb28zbjE2N25wNmcifQ.8NrbrBZOHbU6Cn_NubiJTA';
// const map = new mapboxgl.Map({
//   container: 'contactMap',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });


let mymap = L.map('contactMap', { /* use the same name as your <div id=""> */
  center: [40.7527, -73.9793], /* set GPS Coordinates */
  zoom: 17, /* define the zoom level */
  zoomControl: true, /* false = no zoom control buttons displayed */
  scrollWheelZoom: true /* false = scrolling zoom on the map is locked */
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmVuaWt6IiwiYSI6ImNqeTduZXl5cDAxOTIzb28zbjE2N25wNmcifQ.8NrbrBZOHbU6Cn_NubiJTA', { /* set your personal MapBox Access Token */
  maxZoom: 20, /* zoom limit of the map */
  attribution: 'Données &copy; Contributeurs <a href="http://openstreetmap.org">OpenStreetMap</a> + ' +
    '<a href="http://mapbox.com">Mapbox</a> | ' +
    '<a href="https://creativecommons.org/licenses/by/2.0/">CC-BY</a> ' +
    'Guillaume Rouan 2016', /* set the map's caption */
    id: 'mapbox.streets' /* mapbox.light / dark / streets / outdoors / satellite */
}).addTo(mymap);

L.marker([40.7527, -73.9793]).addTo(mymap); /* set your location's GPS Coordinates : [LAT,LON] */