<html>
    <?php require_once __DIR__ . "/../vendor/autoload.php";?>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pagina Inicio</title>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Righteous" />
        <link rel="stylesheet" href="_commons/css/reset.css">
        <link rel="stylesheet" href="_commons/css/layout.css">
        <link rel="stylesheet" href="_commons/css/style.css">
        <!-- CSS only -->
        <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">-->
    </head>
    <body>
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