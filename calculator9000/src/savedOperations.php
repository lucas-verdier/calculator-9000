<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$db = new PDO('mysql:host=localhost; dbname=calculator9000', 'admin', 'admin');
$queryFetchOperations = $db->prepare("SELECT * FROM `savedOperations`");
$queryFetchOperations->execute();
$fetchOperations = $queryFetchOperations->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($fetchOperations);
