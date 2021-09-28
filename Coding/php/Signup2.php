<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projekt im Modul Entwicklungsprojekt</title>
  <link rel="stylesheet" href="../../css/main.css">
</head>

<!----https://codepen.io/azamatmj/pen/LdrMXv----->
<body>
    <span id="root">
      <section class="section-all">

        <main class="main" role="main">
          <div class="wrapper">
            <article class="article">
              <div class="content">
                <div class="login-box">
                  
                    <div class="header">
                      <h1>Life's Good</h1>
                    </div>

                    <div class="form-wrap">
                 <!--     <form class="form" action="./signup.php" method="post">-->
                  <form method="post" action="./signup.php">
                        <div class="input-box">
                          <input type="text" id="vname" aria-describedby="" placeholder="Vorname" aria-required="true" maxlength="30" autocapitalize="off" autocorrect="off" name="vname" value="" required>
                        </div>
                        
                        <div class="input-box">
                          <input type="text" id="nname" aria-describedby="" placeholder="Nachname" aria-required="true" maxlength="30" autocapitalize="off" autocorrect="off" name="nname" value="" required>                      </div>  
    
                        <div class="input-box">
                          <input type="text" id="email" aria-describedby="" placeholder="Email Adresse" aria-required="true" maxlength="50" autocapitalize="off" autocorrect="off" name="email" value="" required>                      </div>  

                        <div class="input-box">
                          <input type="password" name="password" id="password" placeholder="Passwort" aria-describedby="" maxlength="30" aria-required="true" autocapitalize="off" autocorrect="off" required>
                        </div>  <br>
                        <!--
                        <div class="input-box">
                          <input type="text" id="status" aria-describedby="" placeholder="Status (z.B Schüler, Student, Arbeitnehmer, Rentner etc.)" aria-required="true" maxlength="30" autocapitalize="off" autocorrect="off" name="status" value="" required>
                        </div> --> 

                <!--        <div class="input-box">
                          <select placeholder="Status" name="status" id="status">
                            <option value="" selected></option>
                            <option value="schüler">Schüler/in</option>
                            <option value="student">Student/in</option>
                            <option value="arbeitnehmer">Arbeitnehmer/in</option>
                            <option value="rentner">Rentner/in</option>
                            <option value="diverse">Diverse</option>
                          </select>
                         </div>  -->

                        <span class="button-box">
                          <button class="btn2" type="reset">Zurücksetzen</button>
                         
                          <button class="btn3" type="submit" name="submit">Registrieren</button>
                        </span>  

                      </form>
                    </div> <!-- Form-wrap end -->
                </div> <!-- Login-box end -->

                <div class="app">
                  <p>Hol dir die App.</p>
                  <div class="app-img">
                    <a href="">
                      <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" >
                    </a>
                    <a href="">
                      <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png">
                    </a>  
                  </div>  <!-- App-img end-->
                </div> <!-- App end -->
              </div> <!-- Content end -->
            </article>
          </div> <!-- Wrapper end -->
        </main>
        
      </section>
    </span> <!-- Root -->
  
    <!--
    <footer>
      <div class="foot">
          <p>&copy; Projekt im Modul Entwicklungsprojekt präsentiert von Kimberly Plackenhohn und Eda Serttas</p>
        </div>
  </footer>-->

  </body>


</html>
