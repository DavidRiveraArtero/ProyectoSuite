<!-- Autoload del composer -->
<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="es">
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Pagina Inicial"]); ?>
    <body>
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
        <!--PHP QUE LLAMA AL HEADER YA QUE ESTE SE REPETIRA-->
        <?= My\Helpers::render("/_commons/header.php"); ?>

        <?php
            My\Helpers::log()->info("Entro a la pàgina d'inici"); 
            My\Helpers::log()->debug("Entro a una pàgina", ["page" => basename(__FILE__)]); 
        ?>
        

        <!--DIV QUE CUANDO LE DEMOS AL BOTON TE MANDARA A OTRA PAGINA-->
        <div class='contenedor'>
            <div class='button button--gestor'>
                <a href='PaginaInicio.php'>
                    <h2 id="incidencias" class='titulo titulo--color'>Gestor Incidencias</h2>
                </a>
            </div>
            <div class='button button--mensajeria'>
                <a href='PaginaInicio.php'>
                    <h2 id="mensajeria" class='titulo titulo--color'>Mensajeria</h2>
                </a>
            </div>  
        </div>
             

    </body>
</html>