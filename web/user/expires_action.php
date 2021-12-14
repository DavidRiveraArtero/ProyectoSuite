<?php require_once __DIR__ . "/../../vendor/autoload.php";

// COGEMOS TOKEN DE LA COOKIE
$session_token = $_COOKIE["session_token"];

// COGEMOS UID DE LA SESSION
$uid = $_SESSION["uid"];

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

// SI NO EXISTE EL TOKEN
if(!$existe){
    $expires = time();
    setcookie($session_token, "",$expires,"","",false,false);
    unset($_SESSION["uid"]);
}

// REDIRIGIMOS A PÁGINA DE INICIO
$url = My\Helpers::url("SuiteAplication.php");
My\Helpers::redirect($url);

?>