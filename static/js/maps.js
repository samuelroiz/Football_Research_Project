var queryUrl = "https://raw.githubusercontent.com/samuelroiz/Football_Research_Project/sven/Sven_Football/data/json_data/world_cup_with_coordinates.json";
// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  console.log(data.features);
  // 1.
  // Pass the features to a createFeatures() function:
  createFeatures(data.features);

});
// An array of cities and their locations
// let cities = [
//   {
//     name: "Paris",
//     location: [48.8566, 2.3522]
//   },
//   {
//     name: "Lyon",
//     location: [45.7640, 4.8357]
//   },
//   {
//     name: "Cannes",
//     location: [43.5528, 7.0174]
//   },
//   {
//     name: "Nantes",
//     location: [47.2184, -1.5536]
//   },
//     {
//         name: "moscow",
//     location: [55.715786, 37.553703]
//     }
// ];

// // An array that will store the created cityMarkers
let cityMarkers = data.map((city) => {
  return L.marker(city.coordinates_lat_lng).bindPopup(`<h1>${city.venue_city}</h1>`);
});


// // Add all the cityMarkers to a new layer group.
// // Now, we can handle them as one group instead of referencing each one individually.
let cityLayer = L.layerGroup(cityMarkers);

// // Define variables for our tile layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// // Only one base layer can be shown at a time.
const baseLayer = {
  Street: street,
  Topography: topo
};

// // Overlays that can be toggled on or off
const overlayLayer = {
  Cities: cityLayer
};

// // Create a map object, and set the default layers.
const myMap = L.map("map", {
  center: [61.5240, 105.3188],
  zoom: 3,
  layers: [street, cityLayer]
});


// // // Pass our map layers into our layer control.
// // // Add the layer control to the map. 
L.control.layers(baseLayer, overlayLayer).addTo(myMap);