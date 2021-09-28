<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projekt im Modul Entwicklungsprojekt</title>
  <link rel="stylesheet" href="/css/umfrage.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

</head>


<body>

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

    <div style="margin-top: 50px;" align="center">
        <br><br><br><br><br><br>
        
<?php
    $frage1 = filter_input(INPUT_POST, 'frage1');
    $frage2 = filter_input(INPUT_POST, 'frage2');
    $frage3 = filter_input(INPUT_POST, 'frage3');
    $frage4 = filter_input(INPUT_POST, 'frage4');
    $frage5 = filter_input(INPUT_POST, 'frage5');
    $frage6 = filter_input(INPUT_POST, 'frage6');
    $frage7 = filter_input(INPUT_POST, 'frage7');

    if (!empty($frage1)){
    if (!empty($frage2)){
    if (!empty($frage3)){
    if (!empty($frage4)){
    if (!empty($frage5)){
    if (!empty($frage6)){
    if (!empty($frage7)){

    $host = "localhost";
    $dbusername = "kplacken";
    $dbpassword = "kplacken";
    $dbname = "lg";
 
    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
    }
    else{
        $sql = "INSERT INTO umfrage (frage1, frage2, frage3, frage4, frage5, frage6, frage7)
        values ($frage1, $frage2, $frage3, $frage4, $frage5, $frage6, $frage7)";
        if ($conn->query($sql)){
        echo "Eintrag erfolgreich!";
        }
        else{
            echo "Error: ". $sql ."
            ". $conn->error;
        }
            $conn->close();
    }
    }}}}}}}
     

	?>
        <h2>Vielen Dank für die Teilnahme!</h2>
        <h4>Im Verlauf können Sie sich Ihre Auswertungen für den Monat anzeigen lassen.</h4>
    </div>

</body>

    <script language="javascript" type="text/javascript" src="/js/slide-down-menu.js"></script>

</html>
