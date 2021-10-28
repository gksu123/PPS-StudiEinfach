   /*https://canvasjs.com/html5-javascript-spline-chart/*/

   window.onload = function () {
    var chart = new CanvasJS.Chart("chartBreak",
    {
      axisY: {
      gridThickness: 0.2, 
  },
       data: [
       {
          type: "line",
          lineColor: "black",
  
          dataPoints: [
            { x: new Date(2021, 03, 12), y: 1},
            { x: new Date(2021, 03, 13), y: 0},
            { x: new Date(2021, 03, 14), y: 2}, //indexLabel: "\u2193 lowest",markerColor: "red", markerType: "cross" },
            { x: new Date(2021, 03, 15), y: 3},
            { x: new Date(2021, 03, 16), y: 0},
            { x: new Date(2021, 03, 17), y: 2} , //  indexLabel: "\u2191 highest",markerColor: "#00ff00", markerType: "triangle"},
            { x: new Date(2021, 03, 18), y: 2}
            ]
       }
      ]
    });

    chart.render();
  }
