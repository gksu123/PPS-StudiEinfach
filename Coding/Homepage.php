<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projekt im Modul Entwicklungsprojekt</title>
    <link rel="stylesheet" href="./css/home.css">
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
            <h1 class="logo">Life's Good</h1>
        </div>
    </header>


    <div class="header2">
        <span class="scal" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
        <a class="header-menu_1" href="/Homepage.php">Startseite</a>
        <div class="dropdown">
            <a class="header-menu" href="/Entspannen.html">Entspannen</a>
            <div class="dropdown_content">
                <a class="dropdown_text" href="Entspannen.html">
                    <p>Zum Entspannen</p>
                </a>
                <p class="dropdown_text_nichts">Übungen</p>
                <a href="./html/Übungen/atemübungen.html">
                    <p class="dropdown_text_übung">Atemübungen</p>
                </a>
                <a href="./html/Übungen/morgendliches_stretching.html">
                    <p class="dropdown_text_übung">Morgendliches Stretching</p>
                </a>
                <a href="./html/Übungen/dehnungen_vor_dem_zubettgehen.html">
                    <p class="dropdown_text_übung">Dehnung vor dem Zubettgehen</p>
                </a>
                <a href="./html/Übungen/dehnung_von_nacken&schultern.html">
                    <p class="dropdown_text_übung">Dehnung von Nacken und Schultern</p>
                </a>
            </div>
        </div>
        <div class="dropdown">
            <a class="header-menu" href="/Verlauf.html">Verlauf</a>
            <div class="dropdown_content">
                <a class="dropdown_text" href="/Verlauf.html">
                    <p>Zum Verlauf</p>
                </a>
                <a href="./html/Auswertung-Verlauf/trinkverhalten.html">
                    <p class="dropdown_text_übung">Trinkverhalten</p>
                </a>
                <a href="./html/Auswertung-Verlauf/woechentlich.php">
                    <p class="dropdown_text_übung">Wöchentlicher Verlauf</p>
                </a>
                <a href="./html/Auswertung-Verlauf/monatlich.php">
                    <p class="dropdown_text_übung">Monatlicher Verlauf</p>
                </a>
                <p class="dropdown_text_nichts">Befragung</p>
                <a href="./html/Umfrage/Monatliche-Umfrage.html">
                    <p class="dropdown_text_übung">Monatliche Umfrage</p>
                </a>
            </div>
        </div>
        <div class="dropdown">
            <a class="header-menu" href="/Soforthilfe.html">Soforthilfe</a>
        </div>
    </div>

    <img src="/Bilder/startseite1.jpg" alt="Dehnen" class="grafik">
    <br>


    <details>
        <summary>Tägliche Befragung</summary>
        <p class="p">Um dein Stresslevel einschätzen zu können, ist es hilfreich zu wissen, wie es dir nach dem aufstehen, sowie vor dem schlafen geht. Dafür wählst du nach dem aufstehen die Smileys, sowie die Frage mit ja/nein, bei “Morgens” aus und vor dem schlafen wählst du die Smileys bei “Abends” aus.</p>
        <p class="p">Am Ende jeder Woche kannst du dein Stresslevel unter Verlauf verfolgen.</p>
    </details>

    <!--  <h2 class="befragung">Tägliche Befragung</h2>-->
    <form  method="post"  >

        <div class="morgens" style="background-color: rgb(238, 230, 224); margin: 0 60px 0 60px; padding: 20px; border: 1px solid black;">
            <div>
                <h3>Bitte Morgens ausfüllen:</h3>
                <p><b>Wie hast du die Nacht geschlafen?</b></p>
                <p class="sternebewertung">
                    <input type="radio" id="stern5" name="morgens1" value="5"><label for="stern5" title="sehr gut"></label>
                    <input type="radio" id="stern4" name="morgens1" value="4"><label for="stern4" title="gut"></label>
                    <input type="radio" id="stern3" name="morgens1" value="3"><label for="stern3" title="in Ordnung"></label>
                    <input type="radio" id="stern2" name="morgens1" value="2"><label for="stern2" title="schlecht"></label>
                    <input type="radio" id="stern1" name="morgens1" value="1"><label for="stern1" title="sehr schlecht"></label>
                </p>
            </div>
            <div style="margin-top: 80px;">
                <p><b>Fühlst du dich ausgeschlafen?</b></p>
                <input type="radio" name="morgens2" value="4">ja<br>
                <input type="radio" name="morgens2" value="2">nein<br><br>
        </div>
        </div>

        <br>

        <div class="abends" style="background-color: rgb(238, 230, 224); margin: 0 60px 0 60px; padding: 20px; border: 1px solid black;" >
            <div>
                <h3>Bitte Abends ausfüllen:</h3>
                <p><b>Wie anstrengend war dein Tag?</b></p>
                <p class="sternebewertung">
                    <input type="radio" id="st5" name="abends" value="5"><label for="st5" title="sehr gut"></label>
                    <input type="radio" id="st4" name="abends" value="4"><label for="st4" title="gut"></label>
                    <input type="radio" id="st3" name="abends" value="3"><label for="st3" title="in Ordnung"></label>
                    <input type="radio" id="st2" name="abends" value="2"><label for="st2" title="schlecht"></label>
                    <input type="radio" id="st1" name="abends" value="1"><label for="st1" title="sehr schlecht"></label>
                </p>
                <br><br>
            </div>
        </div>

        <button id="add-btn" type="submit" name="action" value="Senden" style="background-color: rgb(238, 230, 224); margin-left: 60px; margin-top: 10px;">Speichern</button>
    </form>


    <?php
    $morgens1 = filter_input(INPUT_POST, 'morgens1');
    $morgens2 = filter_input(INPUT_POST, 'morgens2');
    $abends = filter_input(INPUT_POST, 'abends');

    if (!empty($morgens1)) {
        if (!empty($morgens2)) {
            if (!empty($abends)) {


                $host = "localhost";
                $dbusername = "kplacken";
                $dbpassword = "kplacken";
                $dbname = "lg";

                // Create connection
                $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
                if (mysqli_connect_error()) {
                    die('Connect Error (' . mysqli_connect_errno() . ') '
                        . mysqli_connect_error());
                } else {
                    $sql = "INSERT INTO umfragewoche (morgens1, morgens2, abends)
        values ($morgens1, $morgens2, $abends)";
                    if ($conn->query($sql)) {
                    } else {
                        echo "Error: " . $sql . "
            " . $conn->error;
                    }
                    $conn->close();
                }
            }
        }
    }


    ?>

    <details>
        <summary>Wasser Angabe</summary>
        <!--    <p class="p"><b>Es wichtig genug zu trinken, denn:</b> Wusstest du schon, dass Wasser die Kraft und die elektrische Energie für alle Gehirnfunktionen, insbesondere für das Denken liefert. Insbesondere in Stresssituationen hilft es uns, den Überblick zu bewahren und auch weiterhin in unserem Vorderhirn zu denken, das allein den Überblick hat. Wasser steigert die Arbeits- und Leistungsfähigkeit, indem es die Aufmerksamkeitsspanne verlängert.</p>
        <p class="p" style="font-style: italic; font-size: .8em;">&rarr; https://www.therapeutenfinder.com/news/100824-die-besten-tipps-gegen-stress-1-wasser-trinken.html</p>-->
        <p class="p">Damit du immer genug trinkst, kannst du hier die getrunkenen Liter angeben. Du klickst nur auf Plus und hast 0.1 L hinzugefügt. Falls du dich mal vertust entfernst du die Liter einfach wieder, indem du auf Minus klickst.</p>
        <p class="p">Am Ende jeder Woche kannst du dein Stresslevel unter Verlauf verfolgen.</p>
    </details>


    <!----https://codepen.io/Tanya_Rybachuk/pen/jyxzEp----->
    <div class="number">
        <h2>Wie viel Liter Wasser haben Sie heute schon getrunken?</h2>
        <h4>Bitte geben Sie hier die getrunkenen Liter an:</h4>



        <!----<form>
            <figure>
            <input class="wasserglas_07" type="image" src="/Bilder/wasserglas.png" alt="Glas als Button">
         
            <input class="wasserglas_05" type="image" src="/Bilder/wasserglas.png" alt="Glas als Button">
            <figcaption>Bildunterschrift</figcaption>
            <input class="wasserglas_025" type="image" src="/Bilder/wasserglas.png" alt="Glas als Button">
            <figcaption>Bildunterschrift</figcaption>
        </figure>
          </form>  ---->
        <div class="button_wasser">
            <table class="tabelle_wasser" style="border-spacing: 25px 0;">
                <tbody>
                    <td>
                        <tr> <input class="wasserglas_07" type="image" src="/Bilder/wasserglas.png" alt="Glas als Button" value="0.0">
                            <input class="wasserglas_05" type="image" src="/Bilder/wasserglas.png" alt="Glas als Button" value="0.0">
                            <input class="wasserglas_03" type="image" src="/Bilder/wasserglas.png" alt="Glas als Button" value="0.0">

                        </tr>
                    </td>
                    <tr>
                        <td>0.7l</td>
                        <td>0.5l</td>
                        <td>0.3l</td>
                    </tr>
                </tbody>
            </table>

            <span class="minus">-</span>
            <input class="zaehler" id="zaehler" type="text" value="0.0"/>
            <span class="plus">+</span>
        </div>
        <!--    <br><br>
        <p style="font-style: italic">Wussten Sie schon, dass Wasser die Kraft und die elektrische Energie für alle
            Gehirnfunktionen, insbesondere für das Denken liefert.
            Insbesondere in Stresssituationen hilft es uns, den Überblick zu bewahren und auch weiterhin in unserem
            Vorderhirn zu denken, das allein den Überblick hat.
            Wasser steigert die Arbeits- und Leistungsfähigkeit, indem es die Aufmerksamkeitsspanne verlängert.</p>
        -->
        <p><b>Es ist wichtig genug zu trinken, denn:</b> Wusstest du schon, dass Wasser die Kraft und die elektrische Energie für alle Gehirnfunktionen, insbesondere für das Denken liefert. Insbesondere in Stresssituationen hilft es uns, den Überblick zu bewahren und auch weiterhin in unserem Vorderhirn zu denken, das allein den Überblick hat. Wasser steigert die Arbeits- und Leistungsfähigkeit, indem es die Aufmerksamkeitsspanne verlängert.</p>
        <p style="font-style: italic; font-size: .8em;">&rarr; https://www.therapeutenfinder.com/news/100824-die-besten-tipps-gegen-stress-1-wasser-trinken.html</p>

        <div style="font-size: 10px;">Icons erstellt von <a href="https://www.flaticon.com/de/autoren/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a></div>

        <p></p>
    </div><br>
    <br><br><br><br>
    <!--   </div>-->

    <footer>
        <div class="footer">
            <p>&copy; Projekt im Modul Entwicklungsprojekt präsentiert von Kimberly Plackenhohn und Eda Serttas</p>
        </div>
    </footer>

</body>

<script language="javascript" type="text/javascript" src="./js/wasser.js"></script>
<script language="javascript" type="text/javascript" src="./js/slide-down-menu.js"></script>

</html>