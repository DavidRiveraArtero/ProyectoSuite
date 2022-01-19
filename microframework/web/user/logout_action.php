<?php
if(isset($_POST["nom"]))
{
    include __DIR__ . './profile.php';

    $nombre = $_POST["nom"];
    echo $nombre;
    setcookie("cookie", $nombre, time() + 30);

    echo ("El valor de la cookie nombre de la cookie es:" . $_COOKIE["cookie"]);
    
    // ------ Destruir cookie ------
    setcookie("cookie", "", time() - 3600);

    // ------ Redirigir  ------
    $url = My\Helpers::url("PaginaInicio.php");
    My\Helpers::redirect($url);
}
?>