let name = 'Messi'

let title = `${name}'s Top 5 Assist Chart`

let players_Name = ["Luis Suraez", "Dani Avles", "Andres Iniesta", "Xavi", "Pedro"]

let timesAssist = [48,42,42,39,34,29]

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