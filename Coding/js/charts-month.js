   /*https://canvasjs.com/html5-javascript-spline-chart/*/

   window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      axisY: {
      gridThickness: 0.2, 
  },
       data: [
       {
          type: "line",
          lineColor: "black",
  
          dataPoints: [
            { x: new Date(2021,03, 1), y: 1},
            { x: new Date(2021,03, 5), y: 4},
            { x: new Date(2021,03, 12), y: 5},
            { x: new Date(2021, 03, 19), y: 3}, //indexLabel: "\u2193 lowest",markerColor: "red", markerType: "cross" },
            { x: new Date(2021, 03, 26), y: 6}
            ]
       }
      ]
    });

    chart.render();
  }
