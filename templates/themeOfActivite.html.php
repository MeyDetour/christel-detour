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

        // Parcourez les images trouvées et les distribuer dans les colonnes
        foreach ($images as $index => $image) {
            $columns[$index % 3][] = $image;  // Répartition des images dans les colonnes
        }

    } else {
        echo "Le dossier n'existe pas.";
    }
    ?>
    <div class=" activityColumns">
        <?php for ($i = 0; $i < 3; $i++): ?>
            <div class="flexCol activityColumn">
                <?php foreach ($columns[$i] as $image): ?>
                    <img class="activityImage"
                         src="<?php echo '/pictures/' . $themeOfActivité . '/' . basename($image); ?>"
                         alt="<?php echo basename($image); ?>">
                <?php endforeach; ?>
            </div>
        <?php endfor; ?>
    </div>
</div>
