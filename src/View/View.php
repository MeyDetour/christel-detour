<?php

namespace App\View;

use Exception;

class View
{
    public static function render($templateName, $donnees){
        $templatePath = __DIR__ . '/../../templates/';

        // Assurez-vous que le fichier du template spécifique existe
        $templateFile = $templatePath.$templateName.'.html.php';
        if (!file_exists($templateFile)) {
            throw new Exception("Template file does not exist: ".$templateFile);
        }

        ob_start();
        extract($donnees);

        require_once $templatePath.$templateName.".html.php";

        $content = ob_get_clean();
        if(!isset($pageTitle)){ $pageTitle = "Christel Detour Assistante maternelle"; }
        if(!isset($metaDescription)){ $metaDescription = "Découvrez Christel DETOUR, assistante maternelle. Apprenez-en plus sur ses activités, formations et procédures."; }

        ob_start();
        require_once $templatePath."base.html.php";
        echo ob_get_clean();

    }
}