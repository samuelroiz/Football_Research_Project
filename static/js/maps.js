const queryUrl = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_europe.geojson";
d3.json(queryUrl).then(function (data) {
  createFeatures(data.features);
});

function createFeatures(venueData) {
  function getRadius(venue_capacity){
    return venue_capacity * 1.5
  }
  function getColor(feature){
    let capacity = feature.geometry.coordinates[2];
    let color = "#ed4928";
    if      ( capacity > 90) { color = "#def03a" }
    else if ( capacity > 70) { color = "#3af067"}
    else if ( capacity > 50) { color = "#6eabf5" }
    else if ( capacity > 30) { color = "#ae1fde" }
    else if ( capacity > 10) { color = "#e619a2" }
    return(color)
  }

  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.venue_city}</h3><hr><p>${new Date(feature.match_start)}<br>Capacity: ${(feature.venue_capacity)}</p>`);
  }

  function pointToLayer (feature, latlng) {
    return new L.CircleMarker ( latlng, 
                                { radius      : getRadius(feature.venue_capacity),
                                  color       : '#555',
                                  fillColor   : getColor(feature),
                                  fillOpacity : 1,
                                  weight      : 1
                                }
                              );
  }

  const venues = L.geoJSON(venueData, {
    pointToLayer : pointToLayer,
    onEachFeature: onEachFeature
  });

  createMap(venues);
}

function createMap(venues) {

  const darkMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {

    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  
});
const blueMap = L.tileLayer("https://api.mapbox.com/styles/v1/kevinkvnpr/cl03byarz002e14mohq9xt99a.html?title=view&access_token=pk.eyJ1Ijoia2V2aW5rdm5wciIsImEiOiJja3pwMzE4emMyajl4MnBzOGFsdzFqMzFpIn0.O-GB2-Voj6EjnBqL9Kex8w&zoomwheel=true&fresh=true#10.64/27.6901/85.3358", {

    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "streets-v11",
    accessToken: API_KEY
  
});
  const baseMaps = {
    "Dark" : darkMap,
    "Blue" : blueMap
  };

  const overlayMaps = {
    Venues: venues
  };
 //   Russia coordinates
  const myMap = L.map("map", {
    center: [ 61.5240, 105.3188], 
    zoom: 3,
    layers: [darkMap, venues]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  const legend = L.control({ position: "bottomright" });

  legend.onAdd = function (map) {
    const div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<b>capacity</b><br>";
    div.innerHTML += '<i style="background: #ed4928"></i><span>&lt;10</span><br>';
    div.innerHTML += '<i style="background: #def03a"></i><span>10-30</span><br>';
    div.innerHTML += '<i style="background: #3af067"></i><span>30-50</span><br>';
    div.innerHTML += '<i style="background: #6eabf5"></i><span>50-70</span><br>';
    div.innerHTML += '<i style="background: #ae1fde"></i><span>70-90</span><br>';
    div.innerHTML += '<i style="background: #990668"></i><span>&gt;90</span><br>';
    return div;
  };

  legend.addTo(myMap);
}