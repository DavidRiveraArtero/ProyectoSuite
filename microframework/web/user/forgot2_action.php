<?php require_once __DIR__ . "/../../vendor/autoload.php";

use My\Mail;
use My\Helpers;
use Rakit\Validation\Validator;
use SebastianBergmann\CodeCoverage\Report\PHP;


// COGEMOS TOKEN
$token = $_POST["token"];

// ABRIMOS CONEXIÓN DATABASE
$connect = new My\Database();

// COGEMOS USER_ID Y TOKEN
$stmt = $connect->prepare("SELECT `user_id`,`token`
                           FROM `2daw.equip04`.user_tokens
                           WHERE token=?");
$stmt->execute([$token]);

// COMPROVACIÓN SI TOKEN EXISTE
$exist = false;
foreach ($stmt as $row)
{
    if($row['token']==$token){
        $user_id = $row['user_id'];
        $exist = true;
    }        
}

// SI EXISTE TOKEN
if($exist){
    // VALIDAMOS CONTRASEÑAS
    $validator = new Validator;

    $validation = $validator->make($_POST ,[
        'passwd'                 => 'required|min:8|regex:/\d/',
        'passwd2'                => 'required|same:passwd'
    ]);
    
    $validation->validate();
    
    // COMPROVAMOS RESULTADO DE VALIDACIÓN
    if ($validation->fails()) {
        // VALIDACIÓN ERRÓNEA
        $errors = $validation->errors();
        exit;
    } else {
        // VALIDACIÓN CORRECTA
        // COGEMOS Y ENCRIPTAMOS PASSWORD
        $passwd = $_POST["passwd"];
        $encriptPasswd = hash("sha256",$passwd);

        // ACTUALIZAMOS CONTRASEÑA
        $stmt = $connect->prepare(" UPDATE `2daw.equip04`.users 
                                    SET `password` = '{$encriptPasswd}'
                                    WHERE id=?; ");
        $stmt->execute([$user_id]);
        
        // REDIRIGIMOS A PÁGINA DE INICIO
        Helpers::flash("LA CONTRASEÑA HA SIDO MODIFICADA CON ÉXITO :)");
        Helpers::flash($encriptPasswd);
        $url = Helpers::url("user/forgot2.php");
        Helpers::redirect($url);
    }
}else{
    // SI NO EXISTE TOKEN REDIRIGIMOS A LA PÁGINA DE INICIO
    Helpers::flash("Error! No s'ha modificat la contrasenya.");
    $url = Helpers::url("user/forgot2.php");
    Helpers::redirect($url);    
}