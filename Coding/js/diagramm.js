//https://webmaster-glossar.de/diagramme-mit-html5-canvas-zeichnen.html

   var canvas = document.getElementById("canvas_diagramm");
   var canvasWidth = 400;
   var canvasHeight = 350;
   canvas.setAttribute('width', canvasWidth);
   canvas.setAttribute('height', canvasHeight);
   var cv = canvas.getContext("2d");
   //Options Grid
   var graphGridSize = 58;
   var graphGridX = (canvasWidth / graphGridSize).toFixed();
   //Draw Grid
   for(var i = 0; i < graphGridX; i ++){
       cv.moveTo(canvasWidth, graphGridSize*i);
       cv.lineTo(0, graphGridSize*i);
   }
   cv.strokeStyle = "#dbdbdb";
   cv.stroke();

    //Data Graph
    var data = { values:[
        {A: "Okt 2020", B: 28, C: "#E65858"},
        {A: "Nov 2020", B: 70, C: "#E65858"},
        {A: "Dez 2020", B: 50, C: "#E65858"},
        {A: "Jan 2021", B: 90, C: "#1fce3c"},
        {A: "Feb 2021", B: 110, C: "#1fce3c"},
        {A: "Mrz 2021", B: 0, C: "#E65858"},
    ]};

    //Options Graph
    var graphMax = 160;
    var graphPadding = 10;
    var graphFaktor = (canvasHeight-(2*graphPadding)) / graphMax;
    var graphWidth = (canvasWidth-graphPadding) / data.values.length;
    var graphTextcolor = '#000000';

    //Draw Graph
    for(var i = 0; i < data.values.length; i ++){
        tmpTop = (canvasHeight-(graphFaktor*data.values[i].B)).toFixed()-graphPadding;
        tmpHeight = ((data.values[i].B*graphFaktor)).toFixed();
        cv.fillStyle = data.values[i].C;
        cv.fillRect(graphWidth+((i-1)*graphWidth)+graphPadding, tmpTop, graphWidth-graphPadding, tmpHeight);
        cv.fillStyle = graphTextcolor;
        cv.fillText(data.values[i].A, graphWidth+((i-1)*graphWidth)+graphPadding+2, canvasHeight-2, graphWidth);
    }

