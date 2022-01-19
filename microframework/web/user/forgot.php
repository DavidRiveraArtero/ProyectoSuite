<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("_commons/head.php", ["subtitle" => "Sign in"]); ?>    
    <body>

        <?php/** MOSTRAR ALERTAS */?>
        <?php $flash = My\Helpers::flash(); ?>
        <?php if(!empty($flash)): ?>
        <div class='flash'>
            <ul>
                <?php foreach($flash as $msg): ?>
                <li class="flash__message"><?= $msg ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php endif; ?>

        <!-- PÁGINA FORMULARIO-->
        <div class="parallax">
            <form action="forgot1_action.php" method="POST" class="form" >
                <h1 class="titulo">¿Has olvidado la contraseña?</h1><br>
                <label for="email" class="form__label">E-mail: </label><br><input type="text" name="email" id="email" class="form__inputext"><br>
                <br><input type="file" name="avatar"/><br>
                <br><button class="boton">SEND</button>
            </form>
        </div>
    </body>
</html>