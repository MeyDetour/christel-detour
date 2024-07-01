<div class="containerMade h100 containerAnimations">

    <?php $theme = "Animations ";
    $link = '/';
    require __DIR__ . "/components/header.html.php"; ?>

    <div class="animationBackgroundTop"></div>
    <div class="animationBackgroundBottom"></div>

    <div class=" whiteContainer">
        <div class="overflowVertical ">

                <?php
                $animations = [
                    ['lejeu.png', "Le jeu sous toute ses forme (libre ou diriger) :", "Dès son plus jeune âge, c’est en jouant qu’un tout-petit commence à faire des apprentissages dans le plaisir. Le jeu a des effets positifs sur tout son développement. Par exemple sur :  <br>
Son développement moteur et sensoriel  <br>
Son développement intellectuel  <br>
Son développement social <br>
Le développement de son langage <br>
L’enfant développe son autonomie et sa confianceen lui."],
                    ['balades.png', "Les balades :", "Les enfants sont débordants d’énergie. Pour bien se développer, et libérer leurs tensions, ils ont besoin de bouger, courir, sauter… Pour leur bien-être, ce besoin de mouvement est essentiel."],
                    ["l'eveil.png", "L’éveille de ses sens :", "Ecoutez : les bruits de la nature en fonction 
des saisons, de la musique, des comptines et 
découverte d’instruments. Ecouter des sons 
différents Sentez : les odeurs de la nature 
(les fleurs, l’herbe, les écores la pluie…),
 les odeurs de la cuisine (fruits, légumes, 
épices…)Touchez : des textures différentes
Observez : la nature, les forme, les objets, 
les couleurs, le monde qu’il l’entour. 
Goutez : des arômes, des saveurs, textures, astringence, piquant, chaud, froid"],
                    ['bac_sensoriel.png', "Le bac sensoriel :", "Effet sur le jeune enfant,
sensoriel : l’enfant touche, il sent, il voit, il découvre son environnement immédiat en appréhendant le contenu du bac,moteur : en parvenant à toucher, attraper, transvaser le contenu du bac, il développe notamment sa motricité fine,cognitif : grâce à des contenus variés, l’enfant apprend et actualise ses connaissances, assouvit sa curiosité, nourrit  son imagination."],
                    ['pate_a_modeler.png', "La pâte à modeler :", "1. La pâte à modeler favorise la relaxation <br>
2. Développer la motricité fine <br>
3. Identifier les couleurs <br>
4. Différencier les quantités <br>
5. Développer les sens <br>
6. Stimuler la créativité <br>
7. Encourager le travail d’équipe <br>
8. Renforcer l’estime de soi des enfants <br>
9. Augmenter la capacité de concentration <br>
10. Affirmer l’autonomie"],
                    ['peinture.png', "La peinture :", "C’est une activité qui développe l’imagination, la patience, la contraction, c’est une
façon de communiquer sur ses émotions, elle développe la confiance en soi, elle
développe la mobilité musculaire particulièrement celle des mains.
La peinture stimule éveiller de l’enfant ux arts visuels cela développe sont ouverture
d’esprit, de créativité et d’imagination."],
                    ['cuisine.png', "La cuisine :", "Cela développe un plus grand intérêt pour les aliments et les nouvelles saveurs. Il est
aussi plus tenté de goûter un plat lorsqu’il a participé à sa préparation. De plus,
cuisiner permet à votre enfant de développer son autonomie, sa confiance en lui,
sa c réativité, sa dextérité et sa motricité fine."],
                    ['gommettes.png', "Les gommettes :", "L’enfant développe sa créativité, sa motricité. L’enfant stimule ses capacités d’attention visuelle : il coordonne œil-main et fait preuve de précision et d’application.Ils apprennent : les formes, les couleurs, les tailles."],
                    ['collage.png', "Découpage et collage :", "Le découpage favorise : la motricité fine, la coordination œil-main, la coordination
des deux mains, la maîtrise des ciseaux pour les plus grand.
Le collage : Cela favorise la créativité, l’indépendance et l’originalité des enfants."],
                    ['dessin.png', "Le dessin :", "Le dessin stimule la créativité et l’imagination des enfants. Le dessin développe la coordination du cerveau, de l’œil et de la main. Le dessin marque l’étape de la
croissance chez les enfants."],
                    ['histoires.png', "Les histoires :", "La lecture d’histoires est aussi un excellent moyen de développer du vocabulaire. Le fait de lire aux enfants, et ceci dès les premiers mois de leur vie, peut aider à stimuler la partie du cerveau qui traite le langage. Les enfants sont attirés par les sons avant même de remarquer l’existence de mots
imprimés sur une page."],
                ];
                foreach ($animations as $animation) {
                    require __DIR__ . "/components/animationBox.html.php";
                }


                ?>


        </div>

    </div>
</div>