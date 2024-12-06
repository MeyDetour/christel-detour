<div class="containerMade">


    <?php $theme = ucfirst($themeOfActivité);
    $link = '/activites/';
    require __DIR__ . "/components/header.html.php"; ?>


    <?php
    // Spécifiez le nom du dossier
    $chemin = __DIR__ . "/../public/pictures/$themeOfActivité/";

    $columns = [[], [], []];  // Trois colonnes

    // Vérifiez si le dossier existe
    if (is_dir($chemin)) {
        $images = glob($chemin . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);
    } else {
        echo "Le dossier n'existe pas.";
    }
    ?>

    <div class=" activityColumns">
        <?php foreach ($images as $image): ?>
            <img class="activityImage"
                 src="<?php echo '/pictures/' . $themeOfActivité . '/' . basename($image); ?>"
                 alt="<?php echo basename($image); ?>">
        <?php endforeach; ?>

    </div>
</div>
