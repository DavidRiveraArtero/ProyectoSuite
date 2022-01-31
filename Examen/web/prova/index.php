<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>

<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Contact us"]) ?>
<body>
    <?= My\Helpers::render("/_commons/header.php") ?>
    <h2>Prova UF1 i UF3</h2>
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
    <p>Dues parts:</p>
    <ul>
        <li>
            <a href="contact.php">Part 1. Formulari de contacte</a>
        </li>
        <li>
            <a href="roles.php">Part 2. Adminitració de rols</a>
        </li>
    </ul>
    <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>