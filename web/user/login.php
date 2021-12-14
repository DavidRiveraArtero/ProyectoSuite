<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("_commons/head.php", ["subtitle" => "Sign in"]); ?>
    <body>   
        <div class="parallax">
            <form action="login_action.php" class="form" method='POST'>
                <h1 class="titulo">LOG IN</h1>
                <label for="email" class="form__label">Email: </label><br><input type="email" name="email" id="email" class="form__inputext"/><br>
                <?php $flash = My\Helpers::flash(); ?>
                <?php if(!empty($flash)): ?>

                <div class='flash'>
                    <ul>
                        <?php foreach($flash as $msg): ?>
                        <li class="flash__message"><?= $msg ?></li><br>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
                <label for="contra" class="form__label">Contraseña: </label><br><input type="password" name="contra" id="contra" class="form__inputext"/><br>
                <br><button class="boton">LOG IN</button>
            </form>
            
            
        </div>
        
    </body>
</html>
