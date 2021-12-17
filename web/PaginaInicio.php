<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<html>
    <?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Pagina Inicial"]); ?>
    <body>
        <header id='header_PagP'>
            <!--BARRA DE NAVEGACION-->
            <nav class="navbar-expand navbar-dark fixed-top">
                <ul class="navbar-nav ml-auto" >
                    <li class="nav-item">
                        <a href="#" class="nav-link btn btn-info btn-lg">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link btn btn-info btn-lg">Register</a>
                    </li>
                </ul>
            </nav>
            <h2 id='NombreEmpresa' class='titulo'>Nombre Empresa</h2>
        </header>
        <div class="parallax">
            <h2>Quienes Somos</h2>
        </div>
        <div class="parallax color3">
            <h2>Servicios</h2>
        </div>
        <footer id='piePagina'>
            <h2 id='NombreEmpresa'>Contactanos</h2>
        </footer>
        <!--JAVASCRIPT-->
        <script src="_commons/js/parallax.js"></script>
    </body>
</html>