
<?php 
session_start();
define('SECURE', true);
require_once('login-config.php');


/**
 *    Anmeldevorgang
 */
if(isset($_POST['send']))
{
    $user_email = trim(htmlspecialchars($_POST['user_email']));
    $user_password = trim(htmlspecialchars($_POST['user_password']));

    //Benutzereingaben validieren
    if(filter_var($user_email, FILTER_VALIDATE_EMAIL) && !empty($user_password))
    {
        $query = $SQL->prepare('SELECT `id` FROM `test` WHERE `email` = ? AND `passwd` = ?');
        $query->bind_param('ss', $_POST['user_email'], md5($_POST['user_password']));
        $query->execute();
        $query->store_result();
        $query->bind_result($user_id);

        //Sind Benutzerdaten vorhanden und korrekt?
        if($query->num_rows == 1)
        {
            $query->fetch();
            $_SESSION['user_id'] = $user_id;
            header('location: Homepage.php');
            exit();
        }
        else
        {
            $error = 'Ihre Anmeldedaten sind nicht korrekt. Bitte wiederholen Sie Ihre Eingabe.';
        }
    }
    else
    {
        $error = 'Bitte f&uuml;llen Sie alle Felder korrekt aus.';
    }
}
else
{
    $error = NULL;
    $user_email = NULL;
}

?>

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
<?php echo $error; ?>
    <span id="root">
      <section class="section-all">
  
        <!-- 1-Role Main -->
        <main class="main" role="main">
          <div class="wrapper">
            <article class="article">
              <div class="content">
                <div class="login-box">
                  <div class="header">
                    <h1>Life's Good</h1>
                  </div><!-- Header end -->
                  <div class="form-wrap">
                    <form method="post" action="Login.php"
  
                      <div class="input-box">
                        <input type="text" id="email" aria-describedby="" placeholder="Email" aria-required="true" maxlength="50" autocapitalize="off" autocorrect="off" name="email" value="<?php echo $user_email; ?>" required>
                      </div>  
  
                      <div class="input-box">
                        <input type="password" name="password" id="password" placeholder="Passwort" aria-describedby="" maxlength="30" aria-required="true" autocapitalize="off" autocorrect="off" required>
                      </div>  
  
                      <span class="button-box">
                        <button class="btn" type="submit" name="submit">Anmelden</button>
                      </span>  
  
                      <a class="forgot" href="#">Passwort vergessen?</a>

                      <p class="text">Sie sind noch nicht Registriert?<a href="http://127.0.0.1/php/Signup2.php">Registrieren</a></p>
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
