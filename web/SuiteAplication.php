<!-- Autoload del composer -->
<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Pagina Inicial"]); ?>
    <body>
        <!--PHP QUE LLAMA AL HEADER YA QUE ESTE SE REPETIRA-->
        <?= My\Helpers::render("/_commons/header.php"); ?>

        <!--DIV QUE CUANDO LE DEMOS AL BOTON TE MANDARA A OTRA PAGINa-->
        <a href='user/PaginaInicio.html'>
            <div class='contenedor_Home_Gestor'>
                <h2>Gestor Incidencias</h2>
            </div>
        <a>
        <div class='contenedor_Home_Mensajeria'>
            <h2>Mensajeria</h2>
        </div>        
    </body>
</html>