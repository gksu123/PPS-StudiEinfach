   /*https://canvasjs.com/html5-javascript-spline-chart/*/

       window.onload = function () {
         var chart = new CanvasJS.Chart("chartWeekly",
         {
           axisY: {
           gridThickness: 0.2, 
       },
            data: [
            {
               type: "line",
               lineColor: "black",
       
               dataPoints: [
                 { x: new Date(2021, 03, 12), y: 6},
                 { x: new Date(2021, 03, 13), y: 3},
                 { x: new Date(2021, 03, 14), y: 10}, //indexLabel: "\u2193 lowest",markerColor: "red", markerType: "cross" },
                 { x: new Date(2021, 03, 15), y: 7},
                 { x: new Date(2021, 03, 16), y: 2},
                 { x: new Date(2021, 03, 17), y: 4} /*, //  indexLabel: "\u2191 highest",markerColor: "#00ff00", markerType: "triangle"},
                 { x: new Date(2021, 03, 18), y: test, color:"black" , markerColor: "#00ff00"}*/
                 ]
            }
           ]
         });
     
         chart.render();
       }
    