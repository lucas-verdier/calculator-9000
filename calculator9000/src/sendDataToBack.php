<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$db = new PDO('mysql:host=localhost; dbname=calculator9000', 'admin', 'admin');

$content = file_get_contents("php://input");

$data = json_decode($content, true);
var_dump($data);
