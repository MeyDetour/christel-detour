<div class="flexRow">
	<div>
		
	</div>
	<div class="flexCol">
		<h1>Mieux me connaître</h1>
		<div class="flexRow">
			<?php 
				$boxesInfo = [
					["Formations", "/pictures/formationsIcon.svg", "/page/formations/", "#FFEEE2"],
					["Activités", "/pictures/activitesIcon.svg", "/page/activites/", "#E9FCFF"],
					["Animations", "/pictures/animationsIcon.svg", "/page/animations/", "#E8E4F2"],
					["Valeurs", "/pictures/valeursIcon.svg", "/page/valeurs/", "#F0E9FF"],
					["Missions", "/pictures/missionsIcon.svg", "/page/missions/", "#FFE9EB"],
					["Contact", "/pictures/contactIcon.svg", "/page/contact/", "#DEF4EA"]
				];
			?>
			<div>
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