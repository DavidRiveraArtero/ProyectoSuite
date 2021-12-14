<?php
// if(isset($_POST["nom"]))
// {
    // include __DIR__ . './profile.php';

    // $nombre = $_POST["nom"];
    // echo $nombre;
    // setcookie("cookie", $nombre, time() + 30);
    // ------ Comprovar si existe la cookie ------
    // setcookie("session_token", "hola", time() + 30);
    if(isset( $_COOKIE['session_token']) )
    {
        // print_r("La cookie ha sido creada");
        // ------ Destruir cookie ------
        setcookie("session_token", "", time() - 3600);
    }

    // session_start();
    // $_SESSION['uid'] = 2;

    // ------ Destruir session ------
    // $_SESSION["uid"]=$value;
    // unset($_SESSION["uid"]);

    // ------ Eliminamos el token de session (“S”)  ------
    // ------ Conectarse en la base de datos ------
    $con = new My\Database();
    $stmt = $con->prepare ("select type from `2daw.equip04`.user_tokens WHERE user_id='2' ");
    $stmt->execute();
    // $row = $stmt->fetch();
    print_r($stmt);
    // My\Helpers::log()->debug($row);

    // ------ Redirigir  ------
    $url = My\Helpers::url("PaginaInicio.php");
    My\Helpers::redirect($url);
// }
?>