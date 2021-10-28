<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <title>Praxisprojekt-StudiEinfach</title>
  <link rel="stylesheet" href="/css/verlauf.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

</head>

<body>
    <!----https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp----->
    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
            <a href="/Support.html">Support</a><br>
            <a href="/Einstellungen.html">Einstellungen</a><br>
            <a href="/html/Login/Login.html">Abmelden</a>
        </div>
    </div>
    
    
    <header>
        <div class="header">
            <h1 class="logo">StudiereEinfach</h1>
        </div>
    </header>
    
        
    <div class="header2">
        <span class="scal" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
        <a class="header-menu_1" href="/html/Homepage.html">Startseite</a>
        <div class="dropdown">
        <a class="header-menu" href="/html/Lernen.html">Lernen</a>
        <div class="dropdown_content">
            <a class="dropdown_text_nichts"><p>Zum Lernen</p></a>
            <a href="/html/Lernen/Karteikarten.html"><p class="dropdown_text_übung">Karteikarten</p></a>
            <a href="/html/Lernen/Dokumente.html"><p class="dropdown_text_übung">Dokumente</p></a>
            <a href="/html/Lernen/Converter.html"><p class="dropdown_text_übung">Converter</p></a>
        </div>
        </div>
        <div class="dropdown">
            <a class="header-menu">Kalender</a>
            <div class="dropdown_content">
                <a class="dropdown_text" href="/html/Kalender.html"><p>Zum Kalender</p></a>
                <a href="/html/Schnittstelle/Stundenplan.html"><p class="dropdown_text_übung">Stundenplan</p></a>
                <a href="/html/Schnittstelle/Praktikumstermine.html"><p class="dropdown_text_übung">Praktikumsplan</p></a>
            </div>
            </div>
        <div class="dropdown">
        <a class="header-menu">Forum</a>
        <div class="dropdown_content">
            <a class="dropdown_text_nichts"><p>Zu den Foren</p></a>
            <a href="/html/Foren/hochschule.html"><p class="dropdown_text_übung">Hochschule</p></a>
            <a href="/html/Foren/studiengang.html"><p class="dropdown_text_übung">Studiengang</p></a>
        </div>
    </div>
    <div class="dropdown">
        <a class="header-menu">Statistik</a>
        <div class="dropdown_content">
            <a href="/html/Lernen/Statistik.html" class="dropdown_text"><p>Zu den Statistiken</p></a>
            <a href="/html/Auswertung-Verlauf/woechentlich.html"><p class="dropdown_text_übung">Lernstatistik: Gelernte Stunden (Tag)</p></a>
            <a href="/html/Auswertung-Verlauf/monatlich.html"><p class="dropdown_text_übung">Lernstatistik: Gelernte Tage (Woche)</p></a>
            <a href="/html/Auswertung-Verlauf/pausen.html"><p class="dropdown_text_übung">Lernstatistik: Gemachte Pausen (Tag)</p></a>
        </div>
    </div>
    </div>

<img src="/Bilder/Balken/gelernte_Stunden.png"class="grafik">
  
    <div class="auswertung">
        <h2>Wöchentlicher Verlauf</h2>
        <h3 style="color: rgb(226, 139, 183);">12.04.2021 - 18.04.2021</h3>

        <div id="chartWeekly" style="height:300px; width:50%; border:1px solid #E65858;border-radius:4px;"></div>
        <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    </div>

    <?php
        $host = "localhost";
        $dbusername = "gksu";
        $dbpassword = "gksu";
        $dbname = "pps";

        $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
        if (mysqli_connect_error()){
            die('Connect Error ('. mysqli_connect_errno() .') '
            . mysqli_connect_error());
        }

        # Verbindung hat geklappt, weiter ...
        echo "Verbindung zur Datenbank erfolgreich.<br>";

        $query = "SELECT * FROM stunden where lernenID = '7' "; //+1

        $result = $conn -> query($query);
        $row = $result->fetch_array(MYSQLI_ASSOC);

        $data = $row["stunden"];

    //    printf('%d \n', $row['stunden'] );

        mysqli_close($conn);
    ?>

    
    <script type="text/javascript">
    /*https://canvasjs.com/html5-javascript-spline-chart/*/
        
    var data = <?php echo $data ?>;
    var test = data;

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
                color: "#E28BB7",
        
                dataPoints: [
                  { x: new Date(2021, 03, 12), y: 6},
                  { x: new Date(2021, 03, 13), y: 3},
                  { x: new Date(2021, 03, 14), y: 10}, //indexLabel: "\u2193 lowest",markerColor: "red", markerType: "cross" },
                  { x: new Date(2021, 03, 15), y: 7},
                  { x: new Date(2021, 03, 16), y: 2},
                  { x: new Date(2021, 03, 17), y: 4} , //  indexLabel: "\u2191 highest",markerColor: "#00ff00", markerType: "triangle"},
                  { x: new Date(2021, 03, 18), y: test, color:"#E28BB7" , markerType: "cross"}
                  ]
             }
            ]
          });
      
          chart.render();
        }
    </script>

    <br><br><br><br><br>

    <footer>
        <div class="footer">
            <p>&copy; Projekt im Modul Praxisprojekt präsentiert von Kimberly Plackenhohn und Eda Serttas</p>
          </div>
    </footer>

</body>

    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <script language="javascript" type="text/javascript" src="/js/slide-down-menu.js"></script>
  <!--  <script language="javascript" type="text/javascript" src="/js/charts-week.js"></script>-->



</html>
