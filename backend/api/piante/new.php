<?php
    require __DIR__.'/../classes/Database.php';
    require __DIR__.'/../utils/headers.php';
    require __DIR__.'/../utils/returnMessage.php';
    require __DIR__.'/../middleware/Auth.php';
    
    putHeaders("GET");
    
    $db = new Database();
    $conn = $db->connect();

    $data = json_decode(file_get_contents("php://input"));
    $auth = new Auth($conn, getallheaders());
    $user = $auth->isValid();
    $upload = __DIR__."/../../../uploads/";

    if($user){
        if($_SERVER["REQUEST_METHOD"] != "POST"){
            sendResponse(405, "Metodo non consentito");
        }else if(!isset($data->nickname) && !isset($data->category) && !isset($data->exactId) && !isset($data->born)){
            sendResponse(400, "Non hai inserito tutti i campi obbligatori");
        }else {
            $nickname = cleanInputs($data->nickname);
            $category = cleanInputs($data->category);
            $exactId = cleanInputs($data->exactId);
            $born = cleanInputs($data->born);
            $date = explode("-", $born); //YYYY-MM-DD

            $image = $_FILES["image"];

            if(empty($nickname) || empty($category) || empty($exactId) || empty($born)){
                sendResponse(400, "Non hai inserito tutti i campi obbligatori");
            }else if(strlen($nickname) < 3){
                sendResponse(422, "Nickname non valido");
            }else if(!is_numeric($category) && $category <= 0){
                sendResponse(422, "Categoria non valida");
            }else if(!is_numeric($exactId) && $exactId <= 0){
                sendResponse(422, "ID del tipo di pianta non valido");
            }else if(checkdate($date[1], $date[2], $date[0])){
                sendResponse(422, "Data di nascita non valida");
            }else{
                if(empty($image)){
                    sendResponse(400, "Devi caricare un immagine");
                }else{

                }
            }
        }
    } else {
        sendResponse(401, "Token non valido");
    }

    function countCategories($conn){
        $sql = "SELECT * FROM categoria";
        $query = $conn->prepare($sql);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);
        return $result["COUNT(*)"];
    }
?>