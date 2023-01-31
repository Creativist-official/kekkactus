<?php
    require __DIR__.'/../classes/Database.php';
    require __DIR__.'/../utils/headers.php';
    require __DIR__.'/../utils/returnMessage.php';
    require __DIR__.'/../middleware/Auth.php';

    putHeaders("GET");

    $db = new Database();
    $conn = $db->connect();

    $auth = new Auth($conn, getallheaders());
    $user = $auth->isValid();
    if($user){
        sendResponse(200, "Utente", [
            "type" => "utente",
            "attributes" => [
                "email" => $user['email'],
                "nome" => $user['nome'],
                "cognome" => $user['cognome'],
                "display_name" => $user['nome']." ".$user['cognome']
            ]
        ]);
    } else {
        sendResponse(401, "Token non valido");
    }
?>
