d3.json(url, function(data){
    // circle relies on a list known as earthquakes
console.log("features check", data.features)
var games = []
data.features.forEach(request => {
    //  [1] is the latitude, [0] is the longtitude... the third number is the depth of the earth quake size
    var latitude=request.geometry.coordinates[1];
    var longtitude=request.geometry.coordinates[0];

    games.push(
        L.marker([latitude, longtitude], {
            // https://www.geeksforgeeks.org/p5-js-stroke-function/
            // Stroke false will determine there is no stroke default size and color
            stroke: false,
            // http://bl.ocks.org/mapsam/6175692 ... Example of bindPopup and how it works
            // What bindPopup does is show the marker or circle of its infomration when you click on it
            // In this code, it will had a popup for the circles 
                                                                        // https://dev.to/swarnaliroy94/the-keyword-new-in-javascript-fh6
                                                                        // example of new... new is a way to avoid creating an empty dic. to pass a function
        }).bindPopup(`<h3>${request.properties.place}</h3><hr><p>${request.properties.title}</p>`,{
            maxWidth: 560
        }
        )
        
    );

    });

    var games_layers = L.layerGroup(games);

    var base_url = "https://raw.githubusercontent.com/samuelroiz/Football_Research_Project/sven/Sven_Football/data/json_data/wc_lat_lng.json";
    d3.json(base_url, function(response) {

        // Create a new marker cluster group.
        var markers = L.markerClusterGroup();
        
        // Loop through the data.
        for (var i = 0; i < response.length; i++) {
        
            // Set the data location property to a variable.
            var location = response[i].venue_city;
        
            // Check for the location property.
            if (location) {
        
            // Add a new marker to the cluster group, and bind a popup.
            markers.addLayer(L.marker([response.latitude, location.longtitude])
                .bindPopup(response[i].match_start));
            };
        
        };
        
        // Add our marker cluster layer to the map.
        myMap.addLayer(markers);
        
        });



    // The link below is the styles... this will determine what kind of layer you want to show. If you want outdoors, you do an outdoor-
    // https://docs.mapbox.com/api/maps/styles/
    // For an example... for style of mapbox streets: mapbox://styles/mapbox/streets-v11
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{
        aatribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 510,
        maxZoom: 17,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    });


    var dark_map_layer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        aatribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 510,
        maxZoom: 17,
        zoomOffset: -1,
        id: "mapbox/dark-v10",
        accessToken: API_KEY
    });

    var outmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        aatribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 510,
        maxZoom: 17,
        zoomOffset: -1,
        id: "mapbox/outdoors-v10",
        accessToken: API_KEY    
    });

    var satmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        aatribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 510,
        maxZoom: 17,
        zoomOffset: -1,
        id: "mapbox/satellilite-v8",
        accessToken: API_KEY    
    });

    // Define a baseMaps object to hold our base layers
    // this will be the circle button legend
    var baseMaps = {
    "Dark Map": dark_map_layer,
    "Outdoors Map": outmap,
    "Satellite Map": satmap,
    "Street Map": streetmap
    };

d3.json(base_url, function(data_2){
    // url_2 will have information of plates
    var world_cup_coordinates_game = L.geoJson(data_2);
    // var uefa_coordinates_game = L.geoJSON(data_3)

    var overlayMaps = {
        "World Cup 2018": games_layers,
        "Test": world_cup_coordinates_game
        // "UEFA Seasons": uefa_coordinates_game
    };

    var myMap = L.map("map", {
        center:[55.78064753354458,37.662303884348291],
        zoom: 4,
        layers:[dark_map_layer, world_cup_coordinates_game]
    });

    L.control.layers(baseMaps, overlayMaps, {

        collapsed: false

    }).addTo(myMap);

    var info = L.control({
        position: "topright"

    });
});    
});
