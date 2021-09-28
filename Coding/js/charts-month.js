   /*https://canvasjs.com/html5-javascript-spline-chart/*/
  window.onload = function () {
          var chart = new CanvasJS.Chart("chartContainer",
          {
            axisY: {
              gridThickness: 0.2,
              stripLines: [{
                  value: 1.5,
                label: "gut"
            }],        
        },
             data: [
             {
                type: "line",
                lineColor:"black",
        
                dataPoints: [
                  { x: new Date(2020, 09, 1), y: 0.8, color:"#FF0000", },
                  { x: new Date(2020, 10, 1), y: 1, color:"#FF0000" },
                  { x: new Date(2020, 11, 1), y: 1.5, color:"#880000"},
                  { x: new Date(2021, 00, 1), y: 0.2, color:"#880000", indexLabel: "\u2193 lowest",markerColor: "#FF0000", markerType: "cross" },
                  { x: new Date(2021, 01, 1), y: 2, color:"#008800"},
                  { x: new Date(2021, 02, 1), y: 2.7, color:"#00FF00",  indexLabel: "\u2191 highest",markerColor: "#00ff00", markerType: "triangle"},
                  { x: new Date(2021, 03, 1), y: 2.3, color:"#00FF00" }
                  ]
             }
            ]
          });
      
          chart.render();

          /*https://canvasjs.com/docs/charts/methods/dataseries/addto/*/ 
          
          document.getElementById("button").addEventListener("click", function(){
            chart.data[0].addTo("dataPoints", { x: new Date(2021, 04, 1), y: 2.1, color:"#00FF00"})
             }); 
        }
    
  