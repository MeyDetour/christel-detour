<div class="containerMade">

    <?php $theme = "Procédure ";
    $link = '/';
    require __DIR__ . "/components/header.html.php"; ?>
    <div class="flexRowBetween ">
        <p class="procedureParagraphe">En tant qu’assistante maternelle agréée depuis 2008, je suis passionnée par mon
            métier et je m'efforce de créer un environnement de confiance et de bien-être pour les enfants que
            j'accueille. J'accueille des enfants de 2 mois et demi jusqu'à leur entrée à l'école dans une ambiance
            familiale, chaleureuse et sécurisante.</p>
        <p class="procedureParagraphe">Mon expérience me permet de proposer des activités variées et adaptées à chaque
            âge, tout en respectant le rythme et les besoins de chaque enfant. J'accorde une grande importance à la
            communication avec les parents pour assurer une collaboration harmonieuse et un suivi personnalisé de chaque
            enfant.</p>
    </div>
    <div class="procedureSchemaContainer flexRow alignStart">
        <?php
        $data = [
            ['contact.svg', 'Prise de contact', 'Un premier contact par téléphone ou email permet de discuter des besoins de votre enfant et des horaires.'],
            ['visite.svg', 'Rencontre et Visite', "Une visite de mon domicile permet de vous familiariser avec l'environnement et discuter de vos attentes."],
            ['modalite.svg', 'Discussion des Modalités', 'Les horaires (de 7h15 à 18h30), activités proposées, et tarifs horaires (entre 4€ et 5,10€) sont définis et discutés.'],
            ['redaction.svg', 'Rédaction et Signature du Contrat', 'Un contrat détaillé est rédigé pour officialiser notre collaboration, incluant horaires, tarifs, et engagements réciproques.'],
            ['livre.svg', 'Cahier de Liaison', 'Un cahier de liaison est mis en place dès le premier jour pour faciliter les échanges sur l’évolution de votre enfant.'],

        ];

        foreach ($data as $index => $datum) :?>
            <div class="flexCol alignCenter">
                <img class="imageSvg" src="/pictures/svg/procedure/<?= $datum[0] ?>" alt="">
                <h6><?= $datum[1] ?></h6>
                <p class="text-center"><?= $datum[2]?></p>
            </div>
            <?php
            if( $index!= count($data)-1 ):
            ?>
                <img class="arrow" src="/pictures/svg/procedure/arrow.svg" alt="">
        <?php
        endif;
        endforeach;
        ?>
    </div>
</div>