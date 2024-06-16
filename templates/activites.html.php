<div class="flexColBetween containerMade h100">

    <?php $theme = "Activtés"; $link ='/';
    require __DIR__ . "/components/header.html.php"; ?>

    <h3 class="" style=""><a href="/activite/plus/">Pourquoi faire des activités ?</a></h3>
    <div class="boxContainerActivity">
        <?php
        $boxesInfo = [
            ["Hiver", "/pictures/svg/activite/hiver.svg", "/hiver/", "#EAE7FF"],
            ["Automne", "/pictures/svg/activite/automne.svg", "/automne/", "#FFDFC9"],
            ["Eté", "/pictures/svg/activite/ete.svg", "/ete/", "#ECFF9E"],
            ["Printemps", "/pictures/svg/activite/printemps.svg", "/printemps/", "#E9FFE9"],
            ["Fêtes", "/pictures/svg/activite/fetes.svg", "/fetes/", "#FFE9EB"],
            ["Carnaval", "/pictures/svg/activite/carnaval.svg", "/carnaval/", "#E8E4F2"],
            ["Halloween", "/pictures/svg/activite/halloween.svg", "/halloween/", "#DEF4EA"],
            ["Noël", "/pictures/svg/activite/noel.svg", "/noel/", "#E1F4D8"],
            ["Pâques", "/pictures/svg/activite/paques.svg", "/paques/", "#D0F3FF"],
            ["Animaux", "/pictures/svg/activite/animaux.svg", "/animaux/", "#F0E9FF"],
        ];

        for ($i = 0; $i < count($boxesInfo); $i++) {
            $values = $boxesInfo[$i];
            require __DIR__ . "/components/boxActivity.html.php";
        }
        ?>


    </div>
</div>
