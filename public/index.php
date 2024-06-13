<?php
require '../vendor/autoload.php';
$router = new AltoRouter();


$router->map( 'GET', '/', function() {
    App\View\View::render('home', []);

});

$router->map('GET|POST', '/[*:pageName]/', function($pageName) {
    App\View\View::render($pageName, []);
});

// match current request
$match = $router->match();

// call closure or throw 404 status
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"].' 404 Not Found');
}