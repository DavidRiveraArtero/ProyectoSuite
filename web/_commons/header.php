
<header class='header'>
    
        <div>
            <img class='header__logo' src='_commons/img/icon.png'/>
        </div>
        <div>
            <h2 class='header__Titulo titulo'>Projecte J-Suite</h2>
            
        </div>
        <div class='hola'>
            <img class='header__user' src='_commons/img/icon.png'/>
            <a href="user/logout_action.php"><input type="button" class="boton" name="cerrar" value="Cerrar sesión"></a>
        </div>
    
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

    <!--<div class='header__imagen'>
        <img src='_commons/img/icon.png'/>
    </div>

    <div>
        <h2 class='header__Titulo'>Projecte J-Suite</h2>
    </div>
-->
    
</header>