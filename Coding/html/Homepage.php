<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praxisprojekt-StudiEinfach</title>
    <link rel="stylesheet" href="/css/home.css">
    <link rel="stylesheet" href="/css/fortschritt.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://unpkg.com/convertapi-js/lib/convertapi.js"></script>

    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
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

<img src="/Bilder/11.png" class="grafik">
<br>
    
<!----------http://circle.firchow.net/--------------->

    <div class="page">

        <div class="dark-area clearfix">

            <!-- green -->
            <div class="clearfix">
                <h2 style="color: white;">Allgemeiner Fortschritt &#x1F6C8;</h2> 
                <div class="c100 p24 dark green">
                    <span>44%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
            </div>
            <h3 style="color: white;">Du hast bisher 44% deiner Aufgaben erledigt.</h3> 
            <!-- /green -->
        </div><!-- /.dark-area -->

        <!-- green -->
        <div class="clearfix">
            <div class="c100 p25 green">
                <span>50%</span>            
                <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                </div>
            </div>

            <div class="c100 p26 green">
                <span>0%</span>
                <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                </div>
            </div>

            <div class="c100 p27 green">
                <span>100%</span>
                <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                </div>
            </div>

            <div class="c100 p28 green">
                <span>25%</span>
                <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                </div>
            </div>
            
        </div>
        <a href="/html/Fortschrittsanzeige/Aufgaben-MA1.html"><img src="/Bilder/Aufgaben_Homepage/Mathematik 1.png" alt="Dehnen" class="grafik3"></a>
        <a href="/html/Fortschrittsanzeige/Aufgaben-MA2.html"><img src="/Bilder/Aufgaben_Homepage/2.png" alt="Dehnen" class="grafik3"></a>
        <img src="/Bilder/Aufgaben_Homepage/3.png" alt="Dehnen" class="grafik3">
        <img src="/Bilder/Aufgaben_Homepage/4.png" alt="Dehnen" class="grafik3">
        <!-- /green -->

    </div>

     <!----https://codepen.io/Tanya_Rybachuk/pen/jyxzEp----->
    <form method="post" action="http://localhost/html/Homepage.php" >
        <div class="number">  
            <div class="button_wasser">
                <details style="border-radius: 5px; background-color: rgb(248, 248, 248);" open>
                    <summary>Stunden gelernt (Tag)</summary>
                    <p class="p">Wie viele Stunden haben Sie heute gelernt?</p>
                    <div style="margin: 20px 0 20px 0">
                        <span class="minus" style="background-color: rgb(223, 223, 223);">-</span>
                            <input class="zaehler" id="zaehler" name="stunden" type="text" value="0" />
                        <span class="plus" style="background-color: rgb(223, 223, 223);">+</span>
                    </div>
                </details>
            </div>

            <div class="button_wasser">
                <details style="border-radius: 5px; background-color: rgb(248, 248, 248);" open>
                    <summary>Tage gelernt (Woche)</summary>
                    <p class="p">Wie oft haben Sie die Woche gelernt?</p>
                    <div style="margin: 20px 0 20px 0">
                        <span class="minus" style="background-color: rgb(223, 223, 223);">-</span>
                            <input class="zaehler" id="zaehler" type="text" value="0" />
                        <span class="plus" style="background-color: rgb(223, 223, 223);">+</span>
                    </div>
                </details>
            </div>

            <div class="button_wasser">
                <details style="border-radius: 5px; background-color: rgb(248, 248, 248);" open>
                    <summary>Pausen (Tag)</summary>
                    <p class="p">Wie viel Pause haben Sie heute gemacht?</p>
                    <div style="margin: 20px 0 20px 0">
                        <span class="minus" style="background-color: rgb(223, 223, 223);">-</span>
                            <input class="zaehler" id="zaehler" type="text" value="0" />
                        <span class="plus" style="background-color: rgb(223, 223, 223);">+</span>
                    </div>
                </details>
            </div>

        </div><br>
            <button id="add-btn" type="submit" name="action" value="Senden">Speichern</button>
    </form>

    <?php
    $stunden = filter_input(INPUT_POST, 'stunden');
    $inf = "inf1359";

  //  if (!empty($stunden)) {

        $host = "localhost";
        $dbusername = "gksu";
        $dbpassword = "gksu";
        $dbname = "pps";

        // Create connection
        $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
        if (mysqli_connect_error()) {
            die('Connect Error (' . mysqli_connect_errno() . ') '
                . mysqli_connect_error());
        } else {
            $sql = "INSERT INTO stunden (userID, stunden)
    values ('$inf', $stunden)";
            if ($conn->query($sql)) {
            } else {
                echo "Error: " . $sql . "
    " . $conn->error;
            }
            $conn->close();
        }
 //   }
    ?>

    <br><br><br><br><br><br><br><br><br><br><br><br><br>

    <footer>
        <div class="footer">
            <p>&copy; Projekt im Modul Praxisprojekt präsentiert von Kimberly Plackenhohn und Eda Serttas</p>
          </div>
    </footer>

</body>

<script language="javascript" type="text/javascript" src="/js/slide-down-menu.js"></script>
<script language="javascript" type="text/javascript" src="/js/fortschrittsanzeige.js"></script>
<script language="javascript" type="text/javascript" src="/js/zaehler.js"></script>

</html>


