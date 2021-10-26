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
            <div id='contenedor_Home_Gestor'>
                <h1>Gestor Incidencias</h1>
            </div>
        <a>
        <div id='contenedor_Home_Mensajeria'>
            <h1>Mensajeria</h1>
        </div>        
    </body>
</html>