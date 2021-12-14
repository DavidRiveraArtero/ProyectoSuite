<?php require_once __DIR__ . "/../../vendor/autoload.php"; 
$con = new My\Database();
$stmt = $con->prepare ("select * from `2daw.equip04`.users WHERE username='Paula'");
$stmt->execute();
$row = $stmt->fetch();
?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Sign in"]); ?> 
    <body>

        <form action="./profile_action.php" method="post" class="form" enctype="multipart/form-data">
            <!-- ------ Configurarión ------ -->
            
            <h3 class="titulo">Configuración del perfil</h3>    
            <input type="text" name="id" id="id" class="form__inputext" value="<?= $row["id"]?>" hidden>

            <p class="texto--negrita">Nom:</p>
            <input type="text" name="nom" id="nom" class="form__inputext" value="<?= $row["username"]?>" readonly>

            <p class="texto--negrita">Correu electronic:</p>
            <input type="text" name="correu" id="correu" class="form__inputext" value="<?= $row["email"]?>">

            <!-- ------ Mensaje de ERROR ------ -->
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


            <p class="texto--negrita">Contraseña:</p>
            <input type="password" name="contrasena" id="contrasena" class="form__inputext" >
            
            <p class="texto--negrita">Repite la contraseña:</p>
            <input type="password" name="confirm_contrasena" id="confirm_contrasena" class="form__inputext" >
            
            <p class="texto--negrita">Avatar:<input type="file" name="avatar" /></p>

            <br>
            <!-- ------ Botones ------ -->
            <input type="submit" class="boton" name="enviar" value="Fet">
            <!-- <a href="./logout_action.php"><input type="button" class="boton" name="cerrar" value="Cerrar sesión" Onclick="./logout_action.php"></a> -->
            <a href="../SuiteAplication.php"><input type="button" class="boton" name="cancelar" value="Cancelar" ></a>



        </form>

    </body>
</html> 