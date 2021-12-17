<?php
require_once __DIR__ . "/../../vendor/autoload.php";

session_start();

// Simulacro de login anterior
// setcookie("session_token", "17779d8966e348b6e18118c2a39169a98c4b1cbd", time() + 300);
// $_SESSION['uid'] = 3;

// ------ Comprovar si existe la cookie ------
if(isset( $_COOKIE['session_token']) )
{
    $token = $_COOKIE['session_token'];
    // ------ Destruir cookie ------
    setcookie("session_token", "", time() - 3600);

    $uid = $_SESSION["uid"];
    // ------ Destruir session ------
    unset($_SESSION["uid"]);
    // My\Helpers::log()->debug("");
    
    // ------ Eliminamos el token de session (“S”)  ------
    // ------ Conectarse en la base de datos ------
    $con = new My\Database();
    $stmt = $con->prepare ("delete from user_tokens WHERE user_id={$uid} AND token='{$token}' ");
    $stmt->execute();

    My\Helpers::flash("Se ha cerrado la sesión");

    // ------ Redirigir  ------
    $url = My\Helpers::url("PaginaInicio.php");
    My\Helpers::redirect($url);
} 

else {
    My\Helpers::flash("No has podido cerrar sesión si no te has logeado");
    // ------ Redirigir  ------
    $url = My\Helpers::url("SuiteAplication.php");
    My\Helpers::redirect($url);
}