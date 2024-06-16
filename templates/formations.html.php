<div class="containerMade">
	<?php 
		$theme = "Formations ";
		$link = "/";
		require __DIR__ . "/components/header.html.php";

		$formations = [
			["secouriste.svg", "Formation Sauveteur Secouriste du Travail (SST)", "Intervenir face à une situation d’accident, protéger de façon adaptée, examiner la situation. Garantir une alerte favorisant l’arrivée de secours. Secourir la victime de manière appropriée"],
			["musical.svg", "L’éveil musicale", "La musique a un effet positif sur bébé. Elle l’apaise et lui apprend à grandir.L’éveil musical pour bébé lui permet de développer des capacités d’écoute, et de concentration. Son ouïe s’affine et bébé est bientôt capable de distinguer les différentes nuances d’un morceau musical et de danser en rythme. Par ailleurs, grâce à l’éveil à la musique, bébé acquiert une meilleure coordination de ses mouvements. Enfin, elle favorise la formation des émotions et bébé s’ouvre naturellement sur le monde qui l’entoure. Il s’exprime et communique à travers la musique."],
			["alimentation.svg", "Alimentation d’un jeune enfant", "Des fruits et des légumes. Des produits céréaliers et des légumes secs : riz, pâtes, pain, blé, semoule, lentilles, haricots secs, pois chiches... Du lait, des produits laitiers et du fromage. De la viande ou du poisson ou des œufs. Une alimentation saine et équilibrée, dès le plus jeune âge, contribue à la bonne santé des enfants.Entre 4 mois et trois ans, c’est la découverte de nouveaux goûts, de nouvelles saveurs et textures. Une étape essentielle qui aura une grande importance sur les futures habitudes alimentaires de l’enfant."],
			["yoga.svg", "Baby yoga", "Activité physique douce et facile. Cela permet aux enfants de découvrir leur corps, leur coordination et leur équilibre. Les enfants apprennent à se détendre et à se relaxer, ce qui peut avoir un effet bénéfique sur leur sommeil et leur réveil."],
			["psychomotricité.svg", "Psychomotricité", "La psychomotricité est la relation entre la perception, la sensibilité, le savoir, et la motricité d’un enfant. Elle permet à l’enfant de s’intégrer au niveau social, de favoriser le jeu en groupe, et d’affronter certaines peurs. Elle est aussi la fenêtre vers le monde de l’enfant dans ses fonctions symboliques, comportementales, cognitives, et langagières."],
			["corporel.svg", "L’éveil corporel", "En s’appropriant très vite son corps par le mouvement, en explorant soi-même et son environnement, en découvrant par le geste des contrées imaginaires, le jeune enfant gagne en confiance. L’éveil corporel contribue au développement et à l’épanouissement de l’enfant mais renforce aussi ses capacités sociales."],
			["emotions.svg", "Les émotions chez le jeune enfant", "Les émotions chez le jeune enfant sont des manifestations spontanées et variées qui participent à son développement. L’enfant exprime d’abord des émotions primaires, comme la joie, la tristesse, la colère, la peur le dégoût et la surprise, qui apparaissent au cours de la première année de vie. Les adultes qui l'entourent ont un rôle important pour l'aider à comprendre et à réguler ses émotions, ce qui va favoriser sa confiance en lui et en les autres."],
		];
	?>

	<div class="flexRowBetween">
		<div class="flexCol">
			<?php
				for ($i = 0; $i <= 3; $i++) {
					$formation = $formations[$i];
					require __DIR__ . "/components/formationBox.html.php";
				} 
			?>
		</div>
		<div class="flexCol">
			<?php
				for ($i = 4; $i < 7; $i++) {

					$formation = $formations[$i];
					require __DIR__ . "/components/formationBox.html.php";
				}
			?>
		</div>
	</div>


</div>