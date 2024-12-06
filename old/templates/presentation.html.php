<div class="presentationContainer containerMade">

    <!-- Page "a propos de moi" -->
    <div class="presentationPart flexCol" id="presentationPart1Container">
        <?php
        $functionBack = "presentationPart1Back()";
        $functionNext = "presentationPart1Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>

        <div class="flexRowBetween alignCenter" id="presentationPart1">
            <div class="one">
                <p class="mb-5"><span>J</span>e me présente, je me nomme <strong>Christel Detour</strong>, j'ai 52 ans
                    et je suis
                    Assistante Maternelle agréée
                    par le Conseil Général du Rhône depuis 2008.
                </p>
                <p>J’ai fait des études de comptabilité et j’ai travaillé 14 ans en tant que chef de service au siège
                    d’un grand groupe de vente d’électroménager, de téléphonie, de matériel informatique et
                    audiovisuel.</p>
            </div>
            <img src="/pictures/svg/contact/christelDetour.jpg" alt="Christel Detour">
            <p class="three">Je suis mariée et nous avons adopté deux enfants qui ont actuellement 19 et 22 ans.
                A l’arrivée de ma deuxième fille, ma volonté de me réorienter professionnellement s’est fait sentir
                car je travaillais loin de mon domicile, l'envie de travailler dans les métiers relatifs à la petite
                enfance était présent et l’expérience vécue avec l’assistante maternelle de ma première fille a été
                très positive et m'a confortée dans mon idée : mon projet commençait à se concrétiser.</p>
        </div>
    </div>

    <!-- Page "Mon role en tant qu'assistante maternelle" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart2Container">
        <?php
        $functionBack = "presentationPart2Back()";
        $functionNext = "presentationPart2Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <h3 class="presentationPart2BigTitle" onclick="presentationPart2BigTitle()">Mon rôle en tant qu’assitante
            maternelle</h3>
        <div class="flexRowBetween alignCenter w100p" id="presentationPart2">
            <div class="flexColEvenly alignCenter w25p h100p">
                <button id="presentationPart2LesBesoins" onclick="presentationPart2LesBesoins.call(this)">Les besoins
                </button>
                <button id="presentationPart2LeRythme" onclick="presentationPart2LeRythme.call(this)">Rythme</button>
                <button id="presentationPart2ConfortSecurity" onclick="presentationPart2Moments.call(this)">Confort et
                    sécurité
                </button>
            </div>
            <div class="flexCol w50p">
                <h3 class="presentationPart2Title">Sélectionnez l’une des cases sur les
                    côtés pour plus d’explications</h3>
                <p class="presentationPart2Texte"></p>
            </div>
            <div class="flexColEvenly alignCenter w25p h100p">
                <button id="presentationPart2Moments" onclick="presentationPart2Moments.call(this)">Moments
                    Privilégiés
                </button>

                <button id="presentationPart2EveilAutonomie" onclick="presentationPart2EveilAutonomie.call(this)">Éveil
                    Autonomie
                </button>
                <button id="presentationPart2Confiance" onclick="presentationPart2Confiance.call(this)">Confiance
                    Dialogue
                </button>

            </div>
        </div>
    </div>


    <!-- Page "Mes valeurs d'éducation" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart3Container">
        <?php
        $functionBack = "presentationPart3Back()";
        $functionNext = "presentationPart3Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <div class="presentationPart3Body w100p">

            <?php
            $data = [
                ['regles.svg', 'Les règles et les limites', 'Un enfant a besoin de repères. Les limites lui permettent de se
construire. Chez l’assistante Maternelle il y a des règles de vie à respecter : (on ne se tape pas,
on respecte l’autre, on écoute l’autre, on dit « s’il te plait », « merci », etc)', '#AAC8F3'],
                ['socialisation.svg', "La socialisation", "Je travaille en équipe avec l’Association des Assistantes Maternelle Les
Pioupious des nounous qui propose des activités collectives manuelles et de motricité. Cette
activité peut m’amener, avec votre accord, à me déplacer dans d’autres lieux avec votre enfant
(sortie ludique, ludothèque, bibliothèque...).
", "#BFF1BB"],
                ['hygiene.svg', "L’hygiène et la sécurité :", "Je veille à la bonne hygiène de votre enfant (change, lavage des
mains, préparation des repas …) ainsi que de l’environnement (ménage quotidien des lieux et nettoyage des jouets...).
", "#E9C8DD"],
                ['autonomie.svg', "L’autonomie", "Je l’accompagne dans tous les actes de la vie quotidienne mais je n’nterviens
pas automatiquement (je le soutiens, le stimule et l’encourage).", "#F1AEB2"],
                ['epanouissement.svg', "L’épanouissement", "Je lui propose diverses activités variées et adaptées. Elles doivent être
 variées pour lui permettre de s’éveiller et adaptées afin de respecter ses aptitudes (ne pas le mettre
 en échec).
", "#F9CDB8"],

            ]; ?>
            <div class="flexColBetween h100p">
                <?php
                for ($i = 0; $i < 2; $i++) : $datum = $data[$i]; ?>

                    <div class="presentationPart3Box">
                        <img src="/pictures/svg/presentation/<?= $datum[0] ?>" alt="">
                        <div class="flexCol">
                            <div class="presentationPart3BoxHead" style="background: <?= $datum[3] ?>">
                                <h6><?= $datum[1] ?></h6>

                            </div>
                            <div class="presentationPart3BoxBody" style="background: <?= $datum[3] ?>">
                                <p><?= $datum[2] ?></p>

                            </div>
                        </div>

                    </div>
                <?php endfor; ?>
            </div>
            <div class="flexColBetween h100p">
                <?php
                for ($i = 2; $i < 5; $i++) : $datum = $data[$i]; ?>

                    <div class="presentationPart3Box">
                        <img src="/pictures/svg/presentation/<?= $datum[0] ?>" alt="">
                        <div class="flexCol">
                            <div class="presentationPart3BoxHead" style="background: <?= $datum[3] ?>">
                                <h6><?= $datum[1] ?></h6>

                            </div>
                            <div class="presentationPart3BoxBody" style="background: <?= $datum[3] ?>">
                                <p><?= $datum[2] ?></p>

                            </div>
                        </div>

                    </div>
                <?php endfor; ?>
            </div>


        </div>
    </div>


    <!-- Page "Le lieu d'accuil" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart4Container">
        <?php
        $functionBack = "presentationPart4Back()";
        $functionNext = "presentationPart4Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <div class="flexCol">
            <div class="flexRowAround alignCenter mb-5 w100p  px-5">
                <img src="/pictures/svg/presentation/jardin.png" id="gardenImg" class="me-5" alt="photo du jardin">
                <div class="flexCol ms-5 h-fit-content">
                    <h3>Le lieu d'accueil</h3>
                    <h4>Mon lieu de travail et aussi mon lieu de vie, </h4>
                    <p>J’habite et accueille votre enfant
                        dans une maison avec 4 chambres <img src="/pictures/svg/presentation/lit.svg"
                                                             alt="icone de lit">
                        , une salle de jeux et un jardin. <img src="/pictures/svg/presentation/arbre.svg"
                                                               alt="icone d'arbre"> Ce lieu a été visité par la
                        puéricultrice et selon ses recommandations, certains aménagements ont été effectués afin
                        d’assurer la sécurité des enfants accueillis.
                    </p>
                    <p>J’organise différents espaces adaptés au temps forts de la journée :
                    </p>
                </div>

            </div>
            <div class="flexRowBetween">
                <div class="cardForRoom flexCol alignCenter w25p">
                    <div class="flexRow alignEnd mb-3">
                        <img class="me-3 " src="/pictures/svg/presentation/jeuexterieur.svg"
                             alt="icone jeu d'exterieur">
                        <h5>Jeu d'extérieur</h5>
                    </div>
                    <p> Un espace jeu extérieur où les enfants pourront avoir des activités plus physiques, des
                        activités de motricité... (Vélos, trottinettes, poussettes, cabane, tunnel ...)</p>
                </div>
                <div class="cardForRoom flexCol alignCenter w25p">
                    <div class="flexRow alignEnd mb-3">
                        <img class="me-3 " src="/pictures/svg/presentation/espacerepos.svg" alt="icone jeu d'oreiller">
                        <h5>Un espace de repos</h5>
                    </div>
                    <p> Un espace repos dans lequel chaque enfant a son lit et pourra faire la sieste dans le respect de
                        ses habitudes et de son rythme.
                    </p>
                </div>
                <div class=" cardForRoom flexCol alignCenter w25p">
                    <div class="flexRow alignEnd mb-3">
                        <img class="me-3 " src="/pictures/svg/presentation/salledejeu.svg"
                             alt="icone jeu de cube de jeu">
                        <h5>Salle de jeu</h5>
                    </div>
                    <p>Un espace jeu dans lequel chaque enfant pourra s’adonner à ses activités préférées avec des
                        jouets adaptés à son âge et à son développement psychomoteur, et ce, toujours dans la
                        bienveillance.</p>
                </div>

            </div>
        </div>

    </div>


    <!-- Page "Enfant horaire et transport" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart5Container">
        <?php
        $functionBack = "presentationPart5Back()";
        $functionNext = "presentationPart5Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <div class="flexCol alignCenter">
            <h3 class="mb-5">Enfants, horaires et transport</h3>
            <div class="flexRowBetween">
                <div class="flexCol alignCenter w25p">
                    <img src="/pictures/svg/presentation/school.svg" alt="">
                    <p>J’accueille les enfants de 2 mois 1/2 jusqu’à 4 ; à leur rentrée scolaire, de 7h15 à 18h30 voire
                        19h00,
                        du lundi au vendredi en temps partiel ou temps plein, avec planning annuel. Je veille à
                        effectuer un accueil harmonieux et prévenant avec chaque enfant.
                    </p>
                </div>
                <div class="flexCol alignCenter w25p">
                    <img src="/pictures/svg/presentation/quatreEnfants.svg" alt="">
                    <p>J’ai un agrément pour quatre enfants, quatre tout âge.
                        Les trajets pour les périscolaire : selon la commune ou je travaille, nous faisons les trajets
                        soit à
                        pied, soit en voiture :
                        j’habite à 900 mètres de l’école de Simandres,
                    </p>
                </div>
                <div class="flexCol alignCenter w25p">
                    <img src="/pictures/svg/presentation/voiture.svg" alt="">
                    <p>Je ne peux pas faire tous les trajets à pied car avec des petites jambes, nous ne pouvons pas
                        faire 8 allers – retours et nous devons tenir compte de la météo. Je suis donc véhiculée et ai
                        le matériel en adéquation avec l’âge de votre enfant pour
                        que le trajet soit réalisé en toute sécurité. Et il m’arrive de travailler sur une école aux
                        alentours de ma
                        commune selon mes gardes.</p>
                </div>
            </div>
        </div>
    </div>


    <!-- Page "L'adaptation et l'accueil au quotidien" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart6Container">
        <?php
        $functionBack = "presentationPart6Back()";
        $functionNext = "presentationPart6Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <div class="flexCol alignCenter">
            <h3 class="mb-5">L’adaptation et l’accueil au quotidien
            </h3>
            <div class="flexRowBetween w80p">
                <div class="left">
                    <p>L'adaptation est essentielle pour préparer la séparation de
                        l'enfant avec ses parents,souvent la première fois hors du
                        cercle familial. Elle permet à l'enfant de se séparer en douceur,
                        de connaître l'Assistante Maternelle, de s'adapter au lieu
                        d'accueil et aux autres enfants. Les modalités sont définies à la
                        signature du contrat et débutent par de courtes périodes de :
                        contact, évoluant vers des accueils plus longs, incluant repas et sieste.</p>
                </div>

                <div class="right">
                    <p>L'accueil se fait en douceur, en prenant note de l'état de santé et des recommandations des
                        parents pour la journée. Après un câlin et des mots rassurants, les parents disent au revoir
                        sans trop prolonger. Un rituel est instauré : chaque enfant a un casier pour ses affaires, et
                        découvre un coin jeu préparé spécialement.</p>
                </div>

            </div>

        </div>

    </div>


    <!-- Page "Les temps fort de l'accuil" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart7Container">
        <?php
        $functionBack = "presentationPart7Back()";
        $functionNext = "presentationPart7Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <div class="flexCol presentationPart7Body alignCenter w80p">
            <h3 class="mb-5">Les temps fort de l’accueil</h3>
            <div class="flexRowBetween">
                <div class="flexCol alignEnd  me-4">
                    <span>La sieste</span>
                    <span>Le repas</span>
                    <span>Le jeu et les animations</span>
                    <span>L’hygiène, la sécurité et la santé</span>
                    <img src="/pictures/svg/presentation/tempsfort1.png" alt="">
                </div>
                <div class="flexCol ms-4">

                    <img src="/pictures/svg/presentation/tempsfort2.png" alt="">
                    <span>L’échange et la communication</span>
                    <span>Les sorties et promenades</span>
                    <span>Les activités</span>
                    <span>Le sommeil</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Page "Mes objectifs" -->
    <div class="presentationPart flexCol alignCenter" id="presentationPart8Container">
        <?php
        $functionBack = "presentationPart8Back()";
        $functionNext = "presentationPart8Next()";
        $nextText = "Fin";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <div class=" saumon">
            <img src="/pictures/svg/presentation/objectifs.png" alt="petite fille entouré de livre">
        </div>
        <div class="violet">

        </div>
        <div class="blanc">
<h3>Mes objectifs</h3>
            <p>Apprendre à connaître votre enfant afin d’adapter l’accueil. <br><br>

                Être reconnue dans mon rôle et mes compétences. <br><br>

                Créer une relation de confiance : La confiance mutuelle est primordiale pour que l’accueil se
                passe dans les meilleures conditions possibles et soit de qualité.</p>
        </div>
    </div>

    <!--    TEMPLATE POUR AJOUTER UNE PAGE
    <div class="presentationPart flexCol alignCenter" id="presentationPart4Container">
        <?php
    /*        $functionBack = "presentationPart2Back()";
            $functionNext = "presentationPart2Next()";
            $nextText = "Suivant";
            require __DIR__ . "/components/presentationHeader.html.php"; */ ?>

    </div>-->


</div>