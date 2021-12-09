<?php 

require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;
use My\Mail;

$validator = new Validator;

// make it
$validation = $validator->make($_POST + $_FILES, [
    'correu'                 => 'required|email',
    'contrasena'              => 'required|min:8|regex:/\d/',
    'confirm_contrasena'      => 'required|same:contrasena',
    'avatar'                => 'uploaded_file:0,1M,png,jpeg',
]);

// then validate
$validation->validate();

if ($validation->fails()) {
    // handling errors
    $errors = $validation->errors();
    echo "<pre>";
    print_r($errors->firstOfAll());
    echo "</pre>";
    exit;
} 
// else {
//     // validation passes
//     echo "Success!";
// }


// ------ Recoger datos ------
$id = $_POST['id'];
$nom = $_POST['nom'];
$correu = $_POST['correu'];
$contrasena =  $_POST['contrasena'];
$avatar =  $_POST['avatar'];


// ------ Encriptar contraseña ------
$HashContrasena = hash("sha256",  $contrasena);

// ------ Mostrar datos ------
// echo ("El teu nom: " . $nom);
// echo ("El teu correu: " . $correu);
// echo ("La teva contraseña: " . $HashContrasena);
// echo ("Tu avatar: " . $avatar);


// ------ Conectarse en la base de datos ------
$con = new My\Database();
$stmt = $con->prepare ("select count(*) from `2daw.equip04`.users WHERE email='$correu' and username<>'$nom'");
$stmt->execute();
$row = $stmt->fetch();
// ------ Consultar si existe con el mismo mail ------
if ($row[0] > 0)
{
    My\Helpers::flash("Ya existe el correo en otra cuenta");
}
else{
    // ------ Actualizar cambio de contraseña, correo y status ------
    $actualizar = $con->prepare ("update `2daw.equip04`.users set password = '{$HashContrasena}', email = '{$correu}', status = 0 where id = {$id} ;");           
    $actualizar->execute();
    // ------ Enviar Email de cambio de correo ------
    $u = My\Helpers::url("/PaginaInicio.php");
    $link = "<a href='{$u}'>Link</a>";

    $subject = "Cambiar contraseña";
    $body = "<h1>{$link}</h1>";
    $isHTML = true;
    $email = new Mail($subject, $body, $isHTML);
    
    $to = ["2daw.equip04@fp.insjoaquimmir.cat"];
    $resultado = $email->send($to);

    if ($resultado)
    {
        print_r("Bien");
    }
    else
    {
        print_r("Mal");
    }
    My\Helpers::flash("Todo bien");
}

foreach ($stmt as $row) 
{   
    if($row['username']!=$nom && $row['email']==$correu)
    {
        // ------ Mensaje de ERROR ------
        My\Helpers::flash("Ya existe el correo en otra cuenta");
        break;
    }
    else if ($row['username'] == $nom )
    {
        $id = $row['id'];                       
        if($row['email']!=$correu)
        {

            // ------ Actualizar cambio de contraseña, correo y status ------
            $actualizar = $con->prepare ("update `2daw.equip04`.users set password = '{$HashContrasena}', email = '{$correu}', status = 0 where id = {$id} ;");           
            $actualizar->execute();
            // ------ Enviar Email de cambio de correo ------
            $u = My\Helpers::url("/PaginaInicio.php");
            $link = "<a href='{$u}'>Link</a>";

            $subject = "Cambiar contraseña";
            $body = "<h1>{$link}</h1>";
            $isHTML = true;
            $email = new Mail($subject, $body, $isHTML);
            
            $to = ["2daw.equip04@fp.insjoaquimmir.cat"];
            $resultado = $email->send($to);

            if ($resultado)
            {
                print_r("Bien");
            }
            else
            {
                print_r("Mal");
            }
            My\Helpers::flash("Todo bien");
        }

        else{
            // ------ Actualizar cambio de información ------
            $actualizar = $con->prepare ("update `2daw.equip04`.users set password = '{$HashContrasena}', email = '{$correu}' where id = {$id};");
            $actualizar->execute();
        }

        // ------ Redirigir  ------
        $url = My\Helpers::url("PaginaInicio.php");
        My\Helpers::redirect($url);

    }
}
$con->close();