<?php

namespace App\View;

use Exception;

class View
{
    public static function render($nomDeTemplate, $donnees){
        $templatePath = __DIR__ . '/../../templates/';

        // Assurez-vous que le fichier du template spécifique existe
        $templateFile = $templatePath . $nomDeTemplate . '.html.php';
        if (!file_exists($templateFile)) {
            throw new Exception("Template file does not exist: " . $templateFile);
        }
        ob_start();
        extract($donnees);

        require_once "${templatePath}${nomDeTemplate}.html.php";

        $content = ob_get_clean();


        ob_start();
        require_once "${templatePath}base.html.php";
        echo ob_get_clean();

    }
}