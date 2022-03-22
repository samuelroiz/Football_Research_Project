// Karim Benzema	44
// 1	Gareth Bale	29
// 2	Mesut Özil	26
// 3	Marcelo	23
// 4	Ángel Di María	22

let name = 'Ronaldo'

let title = `${name}'s Top 5 Assist Chart`

let players_Name = ["Karim Benzema", "Gareth Bale", "Mesut Özil", "Marcelo", "Ángel Di María"]

let timesAssist = [44,29,26,23,22]

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