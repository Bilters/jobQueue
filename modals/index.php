<?php
    $projectNumber = $_POST['projectNumber'];
    $quoteItem = $_POST['quoteItem'];
    $projectName = $_POST['projectName'];
    $projectManager = $_POST['projectManager'];
    $designer = $_POST['designer'];
    $sourceFiles = $_POST['sourceFiles'];
    $deliveryFormat = $_POST['deliveryFormat'];
    $estimatedTime = $_POST['estimatedTime'];
    $deadline = $_POST['deadline'];
    $briefing = $_POST['briefing'];

    $from = 'From: briefing';
    $to = 'sander.nijssen@kpunkt.net';
    $subject = 'briefing';

    $body = "projectNumber: $projectNumber\n quoteItem: $quoteItem\n projectName:\n $projectName\n designer: $designer\n sourceFiles: $sourceFiles \n deliveryFormat: $deliveryFormat\n estimatedTime: $estimatedTime\n deadline: $deadline\n briefing: $briefing";
?>
