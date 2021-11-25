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
                <form action="register_action1.php" method='POST' enctype='multipart/form-data'>
                    <label class='texto--negrita' for="name">Nombre</label><input class='formulario_nombre' name='name' type="text" placeholder='nombre' required></br></br>
                    <label class='texto--negrita' for="">Email</label><input name='email' class='formulario_email' type="email" placeholder='email' required><br><br>
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
                    <label class='texto--negrita' for="">Contraseña</label><input name='password' class='formulario_password' type="password" placeholder='password' min="4" required><br><br>
                    <label class='texto--negrita' for="">Repetir Contraseña</label><input name='password2' class='formulario_repPassword' type="password" placeholder='password' min="4" required><br><br>
                    <label class=''>Avatar</label><input type="file" name='avatar'> <br><br>
                    <button class='formulario_boton boton' type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    </body>
</html>