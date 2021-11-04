<!-- Autoload del composer -->
<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Pagina Inicial"]); ?>
    <body>
        <!--PHP QUE LLAMA AL HEADER YA QUE ESTE SE REPETIRA-->
        <?= My\Helpers::render("/_commons/header.php"); ?>

        <!--DIV QUE CUANDO LE DEMOS AL BOTON TE MANDARA A OTRA PAGINa-->
        <a href='PaginaInicio.php'>
            <div class='button--gestor'>
                <h2 class='incidencias'>Gestor Incidencias</h2>
            </div>
        <a>
        <a href='PaginaInicio.php'>
            <div class='button--mensajeria'>
                <h2 class='mensajeria'>Mensajeria</h2>
            </div>
        </a>        
        
        

    </body>
</html>