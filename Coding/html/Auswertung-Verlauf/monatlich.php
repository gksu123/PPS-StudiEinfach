<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <title>Projekt im Modul Entwicklungsprojekt</title>
  <link rel="stylesheet" href="/css/verlauf.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script type="text/javascript" src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
  <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script> 

</head>


<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>

    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
            <a href="/Support.html">Support</a><br>
            <a href="/Einstellungen.html">Einstellungen</a><br>
            <a href="/html/Login/Login.html">Abmelden</a>
        </div>
    </div>


    <!----https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp----->
    <header>
        <div class="header">
            <h1 class="logo">Life's Good</h1>
        </div>
    </header>

    <div class="header2">
        <span class="scal" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
        <a class="header-menu_1" href="/Homepage.php">Startseite</a>
        <div class="dropdown">
        <a class="header-menu" href="/Entspannen.html">Entspannen</a>
        <div class="dropdown_content">
            <a class="dropdown_text" href="Entspannen.html"><p>Zum Entspannen</p></a>
            <p class="dropdown_text_nichts">Übungen</p>
            <a href="/html/Übungen/atemübungen.html"><p class="dropdown_text_übung">Atemübungen</p></a>
            <a href="/html/Übungen/morgendliches_stretching.html"><p class="dropdown_text_übung">Morgendliches Stretching</p></a>
            <a href="/html/Übungen/dehnungen_vor_dem_zubettgehen.html"><p class="dropdown_text_übung">Dehnung vor dem Zubettgehen</p></a>
            <a href="/html/Übungen/dehnung_von_nacken&schultern.html"><p class="dropdown_text_übung">Dehnung von Nacken und Schultern</p></a>
        </div>
        </div>
        <div class="dropdown">
            <a class="header-menu" href="/Verlauf.html">Verlauf</a>
            <div class="dropdown_content">
                <a class="dropdown_text" href="/Verlauf.html"><p>Zum Verlauf</p></a>
                <a href="/html/Auswertung-Verlauf/trinkverhalten.html"><p class="dropdown_text_übung">Trinkverhalten</p></a>
                <a href="/html/Auswertung-Verlauf/woechentlich.php"><p class="dropdown_text_übung">Wöchentlicher Verlauf</p></a>
                <a href="/html/Auswertung-Verlauf/monatlich.php"><p class="dropdown_text_übung">Monatlicher Verlauf</p></a>
                <p class="dropdown_text_nichts">Befragung</p>
                <a href="/html/Umfrage/Monatliche-Umfrage.html"><p class="dropdown_text_übung">Monatliche Umfrage</p></a>
            </div>
            </div>
            <div class="dropdown">
        <a class="header-menu" href="/Soforthilfe.html">Soforthilfe</a>
    </div>
    </div>

    <div class="auswertung">

        <h2>Monatlicher Verlauf</h2>
        <h3 style="color: rgb(126, 210, 212);">Okt 2020 - Feb 2021</h3>

        <div id="chartContainer" style="height:300px; width:50%; border:1px solid #E65858;border-radius:4px;"></div>
        <button id="button">Add DataPoints</button>
        <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

        <p>In der Umfrage werden die Antworten mit 1-3 Punkten bewertet. 3 steht für sehr gut, 2 steht für gut und 1 für schlecht. Hat der Nutzer alle Fragen beantwortet,
            werden alle Punkte zusammengezählt. Das Ergebnis wird durch die Anzahl der Fragen dividiert. Dadurch ergibt sich der Durchschnitt (das Stresslevel) für einen Monat.
        </p>

        <div id="hier"></div>

    </div>

    <?php
    $host = "localhost";
    $dbusername = "kplacken";
    $dbpassword = "kplacken";
    $dbname = "lg";

    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
    }


    # Verbindung hat geklappt, weiter ...
    echo "Verbindung zur Datenbank erfolgreich.<br>";

    //mysqli_select_db($dbname, $conn);

    $query = "SELECT * FROM umfrage where umfrageId = '6' "; //+1

    $result = $conn -> query($query);
    $row = $result->fetch_array(MYSQLI_ASSOC);
    printf ("%s %s %s %s %s %s %s<br>", $row["frage1"], $row["frage2"], $row["frage3"], $row["frage4"], $row["frage5"], $row["frage6"], $row["frage7"]);


    $array = array($row["frage1"], $row["frage2"], $row["frage3"], $row["frage4"], $row["frage5"], $row["frage6"], $row["frage7"]);

    $summe = array_sum($array);
    $avg = $summe/7;

    echo "summe: " . $summe . "<br>";
    echo "Durchschnitt: " . $avg . "\n";




    /*if ($result = mysqli_query($conn, $query)) {

    
        while ($obj = mysqli_fetch_object($result)) {
            printf ("%s %s %s %s %s %s %s \n",$obj-> frage1, $obj-> frage2, $obj -> frage3, $obj -> frage4, $obj -> frage5, $obj -> frage6, $obj -> frage7 );
        }

        mysqli_free_result($result);

    }*/

    mysqli_close($conn);

    ?>

    <script type="text/javascript">

    /*https://canvasjs.com/html5-javascript-spline-chart/*/
    var avg = <?php echo $avg ?>;
    var test = avg;
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
                    { x: new Date(2021, 03, 1), y: test, color:"#00FF00" }
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



    // boolean outputs "" if false, "1" if true
    var bool = "<?php echo $avg ?>"; 

    document.getElementById("hier").innerHTML  = bool;

    </script>
    
    <br><br><br><br>
    <footer>
        <div class="footer">
            <p>&copy; Projekt im Modul Entwicklungsprojekt präsentiert von Kimberly Plackenhohn und Eda Serttas</p>
          </div>
    </footer>

</body>

    <script language="javascript" type="text/javascript" src="/js/slide-down-menu.js"></script>
    <script language="javascript" type="text/javascript" src="/js/diagramm.js"></script>
 



</html>
