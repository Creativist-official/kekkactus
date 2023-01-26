<?php
require __DIR__."/../utils/headers.php";
require __DIR__."/../utils/returnMessage.php";
require __DIR__."/../utils/checkInputs.php";
require __DIR__."/../classes/Database.php";
require __DIR__."/../classes/JWTHandler.php";

putHeaders("POST");

$db_connection = new Database();
$conn = $db_connection->connect();

$data = json_decode(file_get_contents("php://input")); //Generico input (Senza passare da superglobali)

//Controllo Metodo
if($_SERVER["REQUEST_METHOD"] != "POST"){
    sendResponse(405, "Metodo non consentito");
}
//Controllo se i campi sono vuoti
else if(!isset($data->email) || !isset($data->password) || empty($data->email) || empty($data->password)){
    sendResponse(400, "L'email e la password sono campi obbligatori");
}
else{
    //Pulizia Input
    $email = cleanInputs($data->email);
    $password = cleanInputs($data->password);

    //Verifica Inputs
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        sendResponse(422,'Email non valida!');
    }
    else if(!controlliInput($password, 8)){
        sendResponse(422,'Password non valida!');
    }
    else{
        try{
            $sql = "SELECT * FROM utente WHERE email = :email";
            $query = $conn->prepare($sql);
            $query->bindValue(':email', $email, PDO::PARAM_STR); //Tipo = Parametro Stringa
            $query->execute();
            
            //Se email trovata
            if($query->rowCount() == 1){
                $row = $query->fetch(PDO::FETCH_ASSOC); //Diventa array associativo
                $checkPassword = password_verify($password, $row['password']);

                //Se password corretta
                if($checkPassword){
                    $jwt = new JWTHandler();
                    $token = $jwt->encodeData(
                        'Kekkactus Server',
                        array("email" => $row['email'])
                    );
                    sendResponse(200, "Login effettuato con successo", [
                        "token" => $token,
                        "attributes" => [
                            "email" => $row['email'], 
                            "nome" => $row['nome'], 
                            "cognome" => $row['cognome'],
                            "display_name" => $row['nome']." ".$row['cognome'],
                        ]
                    ]);
                }
                else{
                    sendResponse(401, "Email o password errati");
                }
            }else{
                sendResponse(401, "Email o password errati");
            }
        }
        catch(PDOException $e){
            sendResponse(500, "Errore interno del server", ["error" => $e->getMessage()]);
        }

    }
}
