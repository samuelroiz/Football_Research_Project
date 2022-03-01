console.log(data);

// Greek god names
names = data.map(function (row){
  return row.greekName
});

// Trace for the Greek Data
let Messi = {
    x: data.map(row => row.season),
    y: data.map(row => row.Messi),
    // y: data.map(row => row.Cristiano),
    type: "line",
    name: "Messi"
  };

  let Cristiano = {
    x: data.map(row => row.season),
    y: data.map(row => row.Ronaldo),
    // y: data.map(row => row.Cristiano),
    type: "line",
    name: "Ronaldo"
  };

// Data trace array
let traceData = [Messi, Cristiano]; 

// Apply the group barmode to the layout
let layout = {
  title: "Messi Vs. Cristiano League Goals Over the Years"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);


