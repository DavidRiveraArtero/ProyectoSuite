<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("_commons/head.php", ["subtitle" => "Sign in"]); ?>
    <body>   
        <div class="parallax">
            <form action="" class="form">
                <h1 class="titulo">LOG IN</h1>
                <label for="nombre" class="form__label">Nombre: </label><br><input type="text" name="nombre" id="nombre" class="form__inputext"/><br>
                <label for="contra" class="form__label">Contraseña: </label><br><input type="text" name="contra" id="contra" class="form__inputext"/><br>
                <br><button class="boton">LOG IN</button>
            </form>
        </div>
    </body>
</html>
