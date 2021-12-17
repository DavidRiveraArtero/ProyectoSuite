<?php

use My\Helpers as Help;
use My\Database as DB;

require_once __DIR__ . "/../../vendor/autoload.php";

session_start();

/*******************/
/* simulacre login */
/*******************/
// setcookie("session_token", "1234567890ABCDEFABCD12345678901234ABCDEF", time()+60000);
// $_SESSION["uid"] = 2;
/*******************/


// COGEMOS TOKEN DE LA COOKIE
$session_token = $_COOKIE["session_token"];

// COGEMOS UID DE LA SESSION
$uid = $_SESSION["uid"];

// ABRIMOS BASE DE DATOS
$connect = new DB();

// MIRAMOS SI EL TOKEN EXISTE EN LA BASE DE DATOS
$stmt = $connect->prepare("SELECT `token` 
                           FROM `2daw.equip04`.user_tokens
                           WHERE token=? AND 'type'='S')");
$stmt->execute([$session_token]);

// COMPROVACIÓN SI TOKEN EXISTE
$existe = false;
foreach ($stmt as $row)
{
    if($row['token']==$session_token){
        $existe = true;
    }        
}

// CERRAMOS BASE DE DATOS
$connect->close();

// SI NO EXISTE EL TOKEN
if(!$existe){
    $expires = time();
    setcookie($session_token, "",$expires,"","",false,false);
    unset($_SESSION["uid"]);
    Help::flash("Adiós.");
}else{Help::flash("Todo en orden");}

// REDIRIGIMOS A PÁGINA DE INICIO
$url = Help::url("PaginaInicio.php");
Help::redirect($url);

?>