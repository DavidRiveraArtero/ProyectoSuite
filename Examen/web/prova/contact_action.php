<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use My\Mail;
use Rakit\Validation\Validator;

$validator = new Validator;
//VALIDAR LA INFORMACION DEL POST
$validation = $validator->make($_POST + $_FILES,[
    'subject'=>'required',
    'body' => 'required|max:255|min:2',
    'username'=> 'required',
    'email'=> 'required|email',ñ.-
    'file'=> 'uploaded_file:0,1M'
]);
$validation->validate();


if($validation->fails()){ //VALIDACION ERROR
    //EROR MSG
    $errors = $validation->errors();
    My\Helpers::flash("error");//REVISAR
    $errors = $validation->errors();
    My\Helpers::log()->debug($errors->firstOfAll());
    
    //REDIRECT 
    $url = My\Helpers::url('prova/contact.php');
    My\Helpers::redirect($url);
    exit;
}else{ //VALIDACION EXITOSA

    //SESION
    session_start();
    setcookie("email", $_POST['email'],time() + 30000);
    

    $_SESSION["uid"] = $_POST['email'];

    //MENSAJE SI TIENE UN FILE
    $file = $_FILES['file'];
    if($file != ""){
        My\Helpers::log()->debug("SE GUARDO EN UNA RUTA");
    }else{
        My\Helpers::log()->debug("NO HAY FILE");
    }

    $url=My\Helpers::url("prova/index.php");
    $link = "<a href='{$url}'>Link</a>";
    $subject = "{$_POST['subject']}";
    $body = "<p>Missatge de {$_POST['username']}: {$_POST['body']} . Enviat des de {$link} </p>";
    $isHtml = true;
    $to = ["2daw.equip04@fp.insjoaquimmir.cat"];
    $SendMail = new Mail($subject, $body, $isHtml);
    $send = $SendMail->send($to);


    My\Helpers::flash("Tot OK");
    My\Helpers::flash($send ? "Correu enviat" : "Error de correu");
    $url = My\Helpers::url("prova/contact.php");
    My\Helpers::redirect($url);
}
