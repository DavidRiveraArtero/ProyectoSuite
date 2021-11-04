<!-- Autoload del composer -->
<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Pagina Inicial"]); ?>
    <body class='register'>
        <!--PHP QUE LLAMA AL HEADER YA QUE ESTE SE REPETIRA--> 
        <div class='cajaLogin'>
            <div class='cajaLogin_img'>
                <p>hola</p>
            </div>

            <div class='cajaLogin_Formulario'>
                <label for="">Nombre</label><input type="text"></br>
                <label for="">Nombre</label><input type="text">
            </div>
        </div>

    </body>
</html>