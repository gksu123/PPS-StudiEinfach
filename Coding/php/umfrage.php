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
        $sql = "INSERT INTO login (frage1, frage2, frage3, frage4, frage5, frage6, frage7)
        values ('$frage1','$frage2','$frage3','$frage4','$frage5','$frage6','$frage7')";
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