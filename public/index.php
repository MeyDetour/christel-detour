<?php
require '../vendor/autoload.php';
$router = new AltoRouter();

$router->map('GET', '/', function () {
    App\View\View::render('home', [
        'title' => 'Christel Detour Asisstante maternelle',
        'metaDescription' => "Découvrez Christel DETOUR, assistante maternelle. Apprenez-en plus sur ses activités, formations et procédures."]);

});

$router->map('GET', '/activites/', function () {
    App\View\View::render('/activites', ['title' => 'Activités',
        'metaDescription' => "Les différentes activités que Christel DETOUR réalise avec les enfants qu'elle garde."]);
});
$router->map('GET', '/activites/plus/', function () {
    App\View\View::render('plus', ['title' => 'Activités', 'metaDescription' => "Les raisons de faire des activités"]);
});
$router->map('GET', '/animations/', function () {
    App\View\View::render('animations', ['title' => 'Animations',
        'metaDescription' => "Les différentes animations que Christel DETOUR réalise avec les enfants qu'elle garde."]);
});
$router->map('GET', '/contact/', function () {
    App\View\View::render('contact', ['title' => 'Contact',
        'metaDescription' => "Les manières de contacter Christel DETOUR"]);
});
$router->map('GET', '/formations/', function () {
    App\View\View::render('formations', ['title' => 'Formations', 'metaDescription' => "Les formations effectuées Christel DETOUR"]);
});
$router->map('GET', '/presentation/', function () {
    App\View\View::render('presentation', ['title' => 'Présentation', 'metaDescription' => "Une présentation guidée de Christel DETOUR"]);
});
$router->map('GET', '/procedure/', function () {
    App\View\View::render('procedure', ['title' => 'Procédure', 'metaDescription' => "La procédure effectué pour signer un contrat et veiller a ce que tout se passe bien."]);
});

$router->map('GET|POST', '/activites/[*:theme]/', function ($theme) {
    $allowedThemes = ['hiver', 'automne', 'ete', 'printemps', 'fetes', 'carnaval', 'halloween', 'noel', 'paques', 'animaux'];
    if (!in_array($theme, $allowedThemes)) {

        App\View\View::render('error', [
            "routeToFind" => "/activites/$theme/"]);
        return;

    }

    // Sanitize the theme to prevent XSS
    $safeTheme = htmlspecialchars($theme, ENT_QUOTES, 'UTF-8');

    App\View\View::render('themeOfActivite', [
        'themeOfActivité' => $safeTheme,
        'title' => 'Activité : ' . $safeTheme,
        'metaDescription' => "Quelques images de ses activités pour le thème : " . $theme . " guidée de Christel DETOUR"]);
});


// match current request
$match = $router->match();


// call closure or throw 404 status
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {

        App\View\View::render('error', [
            "routeToFind" => ""]);
        return;

}