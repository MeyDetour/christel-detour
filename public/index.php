<?php
require '../vendor/autoload.php';
$router = new AltoRouter();


$router->map('GET', '/', function () {
    App\View\View::render('home', []);

});

$router->map('GET|POST', '/activites/', function () {
    App\View\View::render('/activites', []);
});
$router->map('GET|POST', '/activite/plus/', function () {
    App\View\View::render('plus', []);
});
$router->map('GET|POST', '/animations/', function () {
    App\View\View::render('animations', []);
});
$router->map('GET|POST', '/contact/', function () {
    App\View\View::render('contact', []);
});
$router->map('GET|POST', '/fomrations/', function () {
    App\View\View::render('fomrations', []);
});
$router->map('GET|POST', '/presentation/', function () {
    App\View\View::render('presentation', []);
});
$router->map('GET|POST', '/procedure/', function () {
    App\View\View::render('procedure', []);
});

$router->map('GET|POST', '/activite/[*:theme]/', function ($theme) {

    App\View\View::render('themeOfActivite', ['themeOfActivité' => $theme]);
});


// match current request
$match = $router->match();


// call closure or throw 404 status
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}