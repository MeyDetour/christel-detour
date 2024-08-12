<div id="homePage" class="flexRow">
	<div id="bigBox" class="flexColBetween">
		<h1>Christel <br><sub>DETOUR</sub></h1>
        <img src="/pictures/svg/home/mainImg.png" alt="image d'une boule à lumière">
        <h4>Assistante maternelle</h4>
	</div>
	<div id="smallBox" class="flexCol">
		<h2>Mieux me connaître</h2>
		<div class="flexRow">
			<?php 
				$boxesInfo = [
					["Activités", "/pictures/svg/home/activitesIcon.svg", "/activites/", "#E9FDE0","Icone de la section Activitiés"],
					["Présentation", "/pictures/svg/home/presentation.svg", "/presentation/", "#FFEEE2","Icone de la section Présentation"],
                    ["Procédure", "/pictures/svg/home/procedure.svg", "/procedure/", "#F4F8C7","Icone de la section Procédure"],

                    ["Animations", "/pictures/svg/home/animationsIcon.svg", "/animations/", "#C7F3FF","Icone de la section Animations"],
                    ["Formations", "/pictures/svg/home/formationsIcon.svg", "/formations/", "#F0DCFF","Icone de la section Formations"],

                    ["Contact", "/pictures/svg/home/contactIcon.svg", "/contact/", "#DEF4EA","Icone de la section Contact"]
				];
			?>
			<div class="leftBoxSection">
				<?php
					for ($i = 0; $i < 3; $i++) {
						$values = $boxesInfo[$i];
						require __DIR__ . "/components/box.html.php";
					}
				?>
			</div>
			<div>
				<?php
					for ($i = 3; $i < 6; $i++) {
						$values = $boxesInfo[$i];
						require __DIR__ . "/components/box.html.php";
					}
				?>
			</div>
		</div>
	</div>
</div>