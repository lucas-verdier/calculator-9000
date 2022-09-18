<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$db = new PDO('mysql:host=localhost; dbname=calculator9000', 'admin', 'admin');

$content = file_get_contents("php://input");

$data = json_decode($content, true);

$operation = $data['params']['operation'];
$result    = $data['params']['result'];

$sendDataQuery = $db->prepare("INSERT INTO `savedOperations` (`operations`, `results`) VALUES (:operation, :result)");
$sendDataQuery->execute([
    ':operation' => $operation,
    ':result'    => $result
]);
var_dump($operation);
