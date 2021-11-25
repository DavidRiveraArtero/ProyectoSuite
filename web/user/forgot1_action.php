<?php require_once __DIR__ . "/../../vendor/autoload.php";

use My\Mail;
use Rakit\Validation\Validator;
use SebastianBergmann\CodeCoverage\Report\PHP;

$validator = new Validator;

    $validation = $validator->make($_POST + $_FILES, [
        'email'                 => 'required|email',
        'avatar'                => 'uploaded_file:0,1M,png,jpeg,gif'
    ]);
    
    $validation->validate();
    
    if ($validation->fails()) {
        // handling errors
        $errors = $validation->errors();
        exit;
    } else {
        // validation passes
    }

    // COGEMOS VARIABLE MAIL
    $mail = $_POST['email'];

    // ABRIMOS CONEXIÓN DATABASE
    $connect = new My\Database();

    // COGEMOS EMAIL Y ID
    $stmt = $connect->prepare("SELECT `email`,`id`, `username` 
                               FROM `2daw.equip04`.users
                               WHERE email=?");
    $stmt->execute([$mail]);
    $cont = 0;

    // COMPROVACIÓN SI MAIL EXISTE
    $existe = false;
    foreach ($stmt as $row)
    {
        if($row['email']==$mail){
            $user_id = $row['id'];
            $user = $row['username'];
            $existe = true;
        }        
    }

    // SI EXISTE MAIL:
    if($existe){
        // CREAMOS TOKEN
        $longToken = random_bytes(20);
        $token = bin2hex($longToken);
        $actualDate = date("Y-m-d H:i:s");
        // INSERT A LA TABLA TOKEN
        $sql = "INSERT INTO `2daw.equip04`.user_tokens
                VALUES ('{$user_id}','{$token}','R','{$actualDate}');";
        My\Helpers::log()->debug($sql);
        $stmt = $connect->prepare($sql);
        $stmt->execute();
        
/////////// PARA LA BASE DE DATOS MOSTRAR TODOS LOS CAMPOS: --->>  SELECT * FROM `2daw.equip04`.users u INNER JOIN `2daw.equip04`.user_tokens ut WHERE u.id = ut.user_id;
        // CERRAMOS CONEXIÓN
        $connect->close();

        // CREAMOS SUBJECT, BODY Y ISHTML PARA MAIL
        $subject = "RECUPERAR PASSWORD";
        $url = My\Helpers::url("user/forgot2.php?token={$token}");
        $link = "<a href='{$url}'>Clica aquí</a>";
        $body = "<h1>HOLA {$user}!!!</h1>
        <h3>BIENVENIDO/A A NUESTRO SISTEMA DE RECUPERACIÓN DE CONTRASEÑAS.</h3>
        <p>Le enviamos este correo porqué hemos recibido una petición de recuperación de contraseña. De ser así, acceda al siguiente link:</p><br> 
        <ul><li>$link</li></ul><br><p>De no ser así, contacte con nosotros lo antes posible a este mail:</p>
        <ul><li>2daw.equip04@fp.insjoaquimmir.cat</li></ul><br><br><h5>GRACIAS POR SU ATENCIÓN!!!</h5>";
        $isHTML = true;

        // CREAMOS OBJETO MAIL
        $correu = new Mail($subject,$body,$isHTML);

        // ASIGNAMOS PARA QUIEN SERÁ EL CORREO (A EL MISMO EN ESTE CASO)
        $to = ['2daw.equip04@fp.insjoaquimmir.cat'];

        // ENVIAMOS CORREO
        $correu->send($to);

        My\Helpers::flash("SUCCESS! El usuario existe!");
        My\Helpers::flash("Diríjase a su mail para ver el correo que le hemos enviado para continuar con el proceso de recuperación de contraseña.");

    // SI NO EXISTE MAIL
    }else{My\Helpers::flash("FAILED! El usuario no existe!");} 

// REDIRIGIMOS A LA PÁGINA DE FORGOT1
$url = My\Helpers::url("user/forgot.php");
My\Helpers::redirect($url);