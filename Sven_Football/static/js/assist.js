
d3.json(url_3, function(data){
    // circle relies on a list known as earthquakes
console.log("features check", data.features)
// console.log("assisted names", data.features.properties.place)
// console.log("properties check", data.features.properties)
var assist = []
var i = 1
var home_place = []
var away_place = []
var nan_place = []
var luis_suarez = []
var dani_avles = []
var andres_iniesta = []
var xavi = []
var pedro = []

    data.features.forEach(request => {
        var date=request.properties.date;
        var place=request.properties.place;
        var opp=request.properties.opponent;
        var position=request.properties.position;
        var minute=request.properties.minute;
        var type=request.properties.type;
        var assited=request.properties.assisted;
        var id=request.properties.id;
        var i = 1

        if (place == "H"){
            home_place.push(place)
        } 
        else if (place == "A" ){
            away_place.push(place)

        }
        else {
            nan_place.push(place)
        };



        if (assited == "Luis Suárez") {
            luis_suarez.push(assited)
        } 
        else if (assited == "Dani Alves") {
            dani_avles.push(assited)
        }
        else if (assited == "Andrés Iniesta") {
            andres_iniesta.push(assited)
        }
        else if (assited == "Xavi"){
            xavi.push(assited)
        }
        else if (assited == "Pedro"){
            pedro.push(assited)
        };
                                    // Luis Suárez                 48
                                    // Dani Alves                  42
                                    // Andrés Iniesta              39
                                    // Xavi                        34
                                    // Pedro                       29
                                    // Neymar                      25
                                    // Jordi Alba                  21
                                    // Ivan Rakitic                19
                                    // Cesc Fàbregas               14
                                    // Sergio Busquets             14
                                    // Alexis Sánchez              12
                                    // David Villa                 10


    });
console.log("Amount of goals Messi scored at home:", home_place.length)
console.log("Amount of goals Messi scored at away:", home_place.length)
console.log("Amount of goals Messi scored at unknown:", nan_place.length)
console.log("Amount of assists Luis Surarez contributed to Messi: ", luis_suarez.length)
console.log("Amount of assists Dani Avles contributed to Messi: ", dani_avles.length)
console.log("Amount of assists Andres Iniesta contributed to Messi: ", andres_iniesta.length)
console.log("Amount of assists Xavi contributed to Messi: ", xavi.length)
console.log("Amount of assists Pedro contributed to Messi: ", pedro.length)

var luis_length = luis_suarez.length
var dani_length =  dani_avles.length
var andres_length = andres_iniesta.length
var pedro_length = pedro.length
var xavi_length = xavi.length

// const labels = Utils.months({count: 7});
// const info = {
// labels: labels,
// datasets: [{
// label: 'My First Dataset',
// data: [65, 59, 80, 81, 56, 55, 40],
// backgroundColor: [
//     'rgba(255, 99, 132, 0.2)',
//     'rgba(255, 159, 64, 0.2)',
//     'rgba(255, 205, 86, 0.2)',
//     'rgba(75, 192, 192, 0.2)',
//     'rgba(54, 162, 235, 0.2)',
//     'rgba(153, 102, 255, 0.2)',
//     'rgba(201, 203, 207, 0.2)'
// ],
// borderColor: [
//     'rgb(255, 99, 132)',
//     'rgb(255, 159, 64)',
//     'rgb(255, 205, 86)',
//     'rgb(75, 192, 192)',
//     'rgb(54, 162, 235)',
//     'rgb(153, 102, 255)',
//     'rgb(201, 203, 207)'
// ],
// borderWidth: 1
// }]
// };




// const config = {
//     type: 'bar',
//     data: info,
//     options: {
//     scales: {
//         y: {
//         beginAtZero: true
//         }
//     }
//     },
// };



});
