   
        window.onload = function () {
          var chart = new CanvasJS.Chart("chartTrinken",
          {
            axisY: {
              gridThickness: 0.2,
              suffix: "l",
              stripLines: [{
                value: 2,
                label: "ideal"
            }],        
        },
             data: [
             {
                type: "spline",
        
                dataPoints: [
                { x: new Date(2021, 01, 15), y: 0.5, indexLabel: "\u2193 lowest",markerColor: "red", markerType: "cross" },
                { x: new Date(2021, 01, 16), y: 1},
                { x: new Date(2021, 01, 17), y: 2.5},
                { x: new Date(2021, 01, 18), y: 1.8},
                { x: new Date(2021, 01, 19), y: 2.9, indexLabel: "\u2191 highest",markerColor: "#00ff00", markerType: "triangle"},
                { x: new Date(2021, 01, 20), y: 1.5},
                { x: new Date(2021, 01, 21), y: 1.2}
                ]
             }
            ]
          });
      
          chart.render();
        }
    
    