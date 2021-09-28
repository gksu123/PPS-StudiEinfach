   /*https://canvasjs.com/html5-javascript-spline-chart/*/
      
      window.onload = function () {
          var chart = new CanvasJS.Chart("chartWeekly",
          {
            axisY: {
            gridThickness: 0.2,
            stripLines: [{
                value: 2,
                label: "gut"
            }],        
        },
             data: [
             {
                type: "line",
                lineColor: "black",
        
                dataPoints: [
                { x: new Date(2021, 01, 15), y: 1.6, color:"#880000"},
                { x: new Date(2021, 01, 16), y: 1.4, color:"#880000" },
                { x: new Date(2021, 01, 17), y: 0.6, indexLabel: "\u2193 lowest",markerColor: "red", markerType: "cross" },
                { x: new Date(2021, 01, 18), y: 1.7, color:"#880000" },
                { x: new Date(2021, 01, 19), y: 2.2, color:"#008800"},
                { x: new Date(2021, 01, 20), y: 3.5,  indexLabel: "\u2191 highest",markerColor: "#00ff00", markerType: "triangle"},
                { x: new Date(2021, 01, 21), y: 3, color:"#00FF00" }
                ]
             }
            ]
          });
      
          chart.render();
        }
    
    