<div class="flexRow">
	<div id="bigBox" class="flexColBetween">
		<h1>Christel <br><sub>DETOUR</sub></h1>
		<h4>Assistante maternelle</h4>
	</div>
	<div id="smallBox" class="flexCol">
		<h2>Mieux me connaître</h2>
		<div class="flexRow">
			<?php 
				$boxesInfo = [
					["Formations", "/pictures/formationsIcon.svg", "/formations/", "#FFEEE2"],
					["Activités", "/pictures/activitesIcon.svg", "/activites/", "#E9FCFF"],
					["Animations", "/pictures/animationsIcon.svg", "/animations/", "#E8E4F2"],
					["Valeurs", "/pictures/valeursIcon.svg", "/valeurs/", "#F0E9FF"],
					["Missions", "/pictures/missionsIcon.svg", "/missions/", "#FFE9EB"],
					["Contact", "/pictures/contactIcon.svg", "/contact/", "#DEF4EA"]
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