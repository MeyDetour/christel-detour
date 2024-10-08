<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title><?=$title?></title>
    <meta name="description" content="<?=$metaDescription?>">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/home.css">
	<link rel="stylesheet" href="/css/activity.css">
	<link rel="stylesheet" href="/css/formations.css">
	<link rel="stylesheet" href="/css/animation.css">
	<link rel="stylesheet" href="/css/contact.css">
	<link rel="stylesheet" href="/css/procedure.css">
	<link rel="stylesheet" href="/css/presentation.css">
	<link rel="stylesheet" href="/css/error.css">
	<link rel="preload" as="image"  href="pictures/svg/home/activitesIcon.svg" />
	<link rel="preload" as="image"  href="pictures/svg/home/animationsIcon.svg" />
	<link rel="preload" as="image"  href="pictures/svg/home/contactIcon.svg" />
	 <link rel="preload" as="image"  href="pictures/svg/home/formationsIcon.svg" />
	<link rel="preload" as="image"  href="pictures/svg/home/presentation.svg" />
	<link rel="preload" as="image"  href="pictures/svg/home/procedure.svg" />
    <link rel="icon" href="/pictures/svg/home/presentation.svg">

</head>
<body>
	<main>
		<?php echo $content; ?>
	</main>

    <script src="/js/main.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>