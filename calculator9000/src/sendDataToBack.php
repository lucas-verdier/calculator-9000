<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$db = new PDO('mysql:host=localhost; dbname=calculator9000', 'admin', 'admin');

var_dump($_POST);
