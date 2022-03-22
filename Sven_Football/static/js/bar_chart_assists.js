// Neymar                      25
// Jordi Alba                  21
// Ivan Rakitic                19
// Sergio Busquets             14
// Cesc Fàbregas               14
// Alexis Sánchez              12
// David Villa                 10
// Adriano                      9
// Deco                         8
// Thierry Henry                8
// Arturo Vidal                 8
// Ronaldinho                   7
// Samuel Eto'o                 7
// Thiago                       6
// Cristian Tello               5
// Marc Bartra                  5
// Bojan Krkic                  5
// Martín Montoya               4
// Yaya Touré                   4
// Arda Turan                   4
let name = 'Messi'

let title = `${name}'s Top Assist Chart`

let players_Name = ["Luis Suraez", "Dani Avles", "Andres Iniesta", "Xavi", "Pedro"," Neymar","Jordi Alba","Ivan Rakitic","Sergio Busquets","Cesc Fàbregas","Alexis Sánchez","David Villa","Adriano","Deco","Thierry Henry","Arturo Vidal","Ronaldinho","Samuel Eto","Thiago","Cristian Tello","Marc Bartra","Bojan Krkic","Martín Montoya","Yaya Touré","Arda Turan"]

let timesAssist = [48,42,42,39,34,29, 25, 21, 19, 14, 14, 12, 10, 9, 8,8,8,7,7,6,5,5,5,4,4,4]

let trace1 = {
x: players_Name,
y: timesAssist,
type: 'bar'
};

let data_bar_chart = [trace1];

let layout = {
title: title
};

Plotly.newPlot("plot", data_bar_chart, layout);