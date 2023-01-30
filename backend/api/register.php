<?php
require __DIR__."/../utils/headers.php";
require __DIR__."/../utils/returnMessage.php";
require __DIR__."/../utils/checkInputs.php";
require __DIR__."/../classes/Database.php";

putHeaders("POST");

$db = new Database();
$conn = $db->connect();

$data = json_decode(file_get_contents("php://input")); //Generico input (Senza passare da superglobali)

//Controllo Metodo
if($_SERVER["REQUEST_METHOD"] != "POST"){
    sendResponse(405, "Metodo non consentito");
}
//Controllo se i campi sono vuoti
else if(!isset($data->email) || !isset($data->password) || !isset($data->name) || !isset($data->surname)){
    sendResponse(400, "Non hai inserito tutti i campi obbligatori");
}
else{
    //Pulizia Input
    $name = cleanInputs($data->name);
    $surname = cleanInputs($data->surname);
    $email = cleanInputs($data->email);
    $password = cleanInputs($data->password);

    if(empty($name) || empty($surname) || empty($email) || empty($password)){
        sendResponse(400,'Non hai inserito tutti i campi obbligatori');
    }

    //Verifica Inputs
    else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        sendResponse(422,'Email non valida!');
    }
    else if(strlen($password) < 8){
        sendResponse(422,'Password non valida!');
    }else if(strlen($name) < 3){
        sendResponse(422,'Nome non valido!');
    }else if(strlen($surname) < 3){
        sendResponse(422,'Cognome non valido!');
    }
    else{
        try{
            $checkEmail = "SELECT email FROM utente WHERE email = :email";
            $query = $conn->prepare($checkEmail);
            $query->bindValue(':email', $email, PDO::PARAM_STR); //Tipo = Parametro Stringa
            $query->execute();

            //Se email trovata
            if($query->rowCount() == 1){
                sendResponse(400,'Email già in uso!');
            }
            else {
                $sql = "INSERT INTO utente (nome, cognome, email, password) VALUES(:nome, :cognome, :email, :password)";
                $query = $conn->prepare($sql);
                $query->bindValue(':nome', $name, PDO::PARAM_STR); //Tipo = Parametro Stringa
                $query->bindValue(':cognome', $surname, PDO::PARAM_STR);
                $query->bindValue(':email', $email, PDO::PARAM_STR);
                $query->bindValue(':password', password_hash($password, PASSWORD_DEFAULT), PDO::PARAM_STR);
                $query->execute();

                sendResponse(201, "Registrazione avvenuta con successo", [
                    "attributes" => [
                        "email" => $email, 
                        "nome" => $name, 
                        "cognome" => $surname,
                        "display_name" => $name." ".$surname
                    ]
                ]);
            }
        } catch (PDOException $e) {
            sendResponse(500, "Errore interno del server", ["error" => $e->getMessage()]);
        }
        
    }

}
?>