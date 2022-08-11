<?php
  require "config.php";
  require COMPOSER_DIR . "/autoload.php";
  require CLASSES_DIR . "/SmartyWrapper.class.php";
  require CLASSES_DIR . "/Dummy.class.php";

  $template = isset($_GET['template']) ? trim($_GET['template'], "/") : "index";
  $template = str_replace(".", '', $template);


  $wrapper = new SmartyWrapper();

  if (file_exists("handlers/{$template}.php")){
      include_once "handlers/{$template}.php";
  } else if($wrapper->templateExists($template . ".tpl")) {
      $wrapper->display($template . ".tpl");
  } else {
      header("Location:/404");
  }

// $ua_select='';
// $ru_select='';
// $language='';
// if((isset($_GET['language']) && $_GET['language']=='ua') || $_GET['language']) {
//     $ua_select='selected';
//     $language='ua';
// } else {
//     $ru_select='selected';
//     $language='ru';
//                         }
