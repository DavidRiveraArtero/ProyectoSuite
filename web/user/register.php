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
                <form action="">
                    <label class='texto--negrita' for="name">Nombre</label><input class='formulario_nombre' name='name' type="text" placeholder='nombre' required></br></br>
                    <label class='texto--negrita' for="">Email</label><input class='formulario_email' type="email" placeholder='email' required><br><br>
                    <label class='texto--negrita' for="">Contraseña</label><input class='formulario_password' type="password" placeholder='password' required><br><br>
                    <label class='texto--negrita' for="">Repetir Contraseña</label><input class='formulario_repPassword' type="email" placeholder='password' required><br><br>
                    <button class='formulario_boton boton' type="submit">Registrarse</button>
                </form>
            </div>
        </div>

    </body>
</html>