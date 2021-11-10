<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Sign in"]); ?>
    <body class='register'>
        <form action="" method="post" class="form">
            <h3 class="titulo">Configuración del perfil</h3>    
            <p class="texto--negrita">Nom: <br><input type="text" id="nom" class="form__inputext" placeholder="Nom"></p>
            <p class="texto--negrita">Correu electronic: <br><input type="text" id="nom" class="form__inputext" placeholder="Correu electronic"></p>
            <p class="texto--negrita">Contraseña: <br> <input type="text" id="nom" class="form__inputext" placeholder="Contraseña"></p>
            <button class="boton">Fet</button>
        </form>
    </body>
</html>
