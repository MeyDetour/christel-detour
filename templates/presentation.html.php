<div class="presentationContainer containerMade">

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
    <div class="presentationPart flexCol alignCenter" id="presentationPart2Container">
        <?php
        $functionBack = "presentationPart2Back()";
        $functionNext = "presentationPart2Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>
        <h2 class="presentationPart2BigTitle" onclick="presentationPart2BigTitle()">Mon rôle en tant qu’assitante maternelle</h2>
        <div class="flexRowBetween alignCenter w100p" id="presentationPart2">
            <div class="flexColEvenly alignCenter w25p h100p">
                <button id="presentationPart2LesBesoins" onclick="presentationPart2LesBesoins.call(this)">Les besoins</button>
                <button id="presentationPart2LeRythme" onclick="presentationPart2LeRythme.call(this)" >Rythme</button>
                <button id="presentationPart2ConfortSecurity" onclick="presentationPart2Moments.call(this)" >Confort et sécurité</button>
             </div>
            <div class="flexCol w50p">
                <h3 class="presentationPart2Title">Sélectionnez l’une des cases sur les
                    côtés pour plus d’explications</h3>
                <p class="presentationPart2Texte"> </p>
            </div>
            <div class="flexColEvenly alignCenter w25p h100p">
                <button id="presentationPart2Moments" onclick="presentationPart2Moments.call(this)">Moments Privilégiés</button>

                <button id="presentationPart2EveilAutonomie" onclick="presentationPart2EveilAutonomie.call(this)">Éveil Autonomie</button>
                <button id="presentationPart2Confiance" onclick="presentationPart2Confiance.call(this)">Confiance Dialogue</button>

            </div>
        </div>
    </div>
    <div class="presentationPart flexCol alignCenter" id="presentationPart3Container">
        <?php
        $functionBack = "presentationPart3Back()";
        $functionNext = "presentationPart3Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>

    </div>
    <div class="presentationPart flexCol alignCenter" id="presentationPart4Container">
        <?php
        $functionBack = "presentationPart2Back()";
        $functionNext = "presentationPart2Next()";
        $nextText = "Suivant";
        require __DIR__ . "/components/presentationHeader.html.php"; ?>

    </div>

    <div class="progressBar">
        <div class="textes"><span class="text1">Moi</span>
            <span class="text2">Mon role</span>
            <span class="text3">Développement</span>
            <span class="text4">l'accueil</span>
            <span class="text5">Objectifs</span></div>
        <div class="line">
            <div class="point1"></div>
            <div class="point2"></div>
            <div class="point3"></div>
            <div class="point4"></div>
            <div class="point5"></div>
        </div>
    </div>
</div>