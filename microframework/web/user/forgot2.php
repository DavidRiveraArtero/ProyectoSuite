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
            <form action="forgot2_action.php" method="POST" class="form">
                <h1 class="titulo">Introduce tu nueva contraseña</h1><br>
                <label for="passwd" class="form__label">Nueva contraseña: </label><br><input type="password" name="passwd" id="passwd" class="form__inputext"><br>
                <br><label for="passwd2" class="form__label">Repite nueva contraseña: </label><br><input type="password" name="passwd2" id="passwd2" class="form__inputext"/><br>
                <input type="hidden" value="<?= $_GET["token"]; ?>" name="token" id="token"/>
                <br><button class="boton">SEND</button>
            </form>
        </div>
    </body>
</html>