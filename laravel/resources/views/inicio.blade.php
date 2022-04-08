<html lang="es">
    <head>
        <title>Pagina de inicio</title>
        <link rel="stylesheet" href="{{asset("css/reset.css")}}">
        <link rel="stylesheet" href="{{asset("css/component.css")}}">
        <link rel="stylesheet" href="{{asset("css/layout.css")}}">
        <link rel="stylesheet" href="{{asset("css/style.css")}}">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
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
            <h1 id='NombreEmpresa' class='titulo'>Nombre Empresa</h1>
        </header>
        <div class="parallax">
            <h2>Quienes Somos</h2>
        </div>
        <div class="parallax color3">
            <h2>Servicios</h2>
        </div>
        <footer  id='piePagina'>
            <h2 id='NombreEmpresa'>Contactanos</h2>
        </footer>
        <!--JAVASCRIPT-->
        <script src="_commons/js/parallax.js"></script>
    </body>
</html>
