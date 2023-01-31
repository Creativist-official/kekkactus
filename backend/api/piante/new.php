<?php
    require __DIR__.'/../../classes/Database.php';
    require __DIR__.'/../../utils/headers.php';
    require __DIR__.'/../../utils/returnMessage.php';
    require __DIR__.'/../../utils/checkInputs.php';
    require __DIR__.'/../../middleware/Auth.php';
    
    putHeaders("POST");
    
    $db = new Database();
    $conn = $db->connect();

    $data = json_decode(json_encode($_POST));
    $auth = new Auth($conn, getallheaders());
    $user = $auth->isValid();

    $upload = __DIR__."/../../../uploads/";
    $valid_extensions = array("jpg", "jpeg", "png", "bmp", "gif");
    if(!file_exists($upload)){
        mkdir($upload, 0755);
    }

    if($user){
        if($_SERVER["REQUEST_METHOD"] != "POST"){
            sendResponse(405, "Metodo non consentito");
        }else if(!isset($data->nickname) || !isset($data->category) || !isset($data->exactId) || !isset($data->born) || !isset($_FILES["image"]) || !isset($data->height)){
            sendResponse(400, "Non hai inserito tutti i campi obbligatori");
        }else {
            $nickname = cleanInputs($data->nickname);
            $category = cleanInputs($data->category);
            $exactId = cleanInputs($data->exactId);
            $born = cleanInputs($data->born);
            $height = cleanInputs($data->height);
            $date = explode("-", $born); //YYYY-MM-DD

            $image = $_FILES["image"];

            if(empty($nickname) || empty($category) || empty($exactId) || empty($born) || empty($height)){
                sendResponse(400, "Non hai inserito tutti i campi obbligatori");
            }else if(strlen($nickname) < 3){
                sendResponse(422, "Nickname non valido");
            }else if(!is_numeric($category) || (int)$category <= 0){
                sendResponse(422, "Categoria non valida");
            }else if(!is_numeric($exactId) || (int)$exactId <= 0){
                sendResponse(422, "ID del tipo di pianta non valido");
            }else if(count($date) != 3 || !checkdate((int)$date[1], (int)$date[2], (int)$date[0]) || $born > date('Y-m-d')){
                sendResponse(422, "Data di nascita non valida");
            }else if(!is_numeric($height) || (int)$height <= 0){
                sendResponse(422, "Altezza non valida");
            }else{
                if(!isset($image["name"]) || empty($image["name"])){
                    sendResponse(400, "Devi caricare un immagine");
                }else{
                    $fileExtension = strtolower(pathinfo($image["name"], PATHINFO_EXTENSION));
                    if(in_array($fileExtension, $valid_extensions)){
                        if($image["size"] < 5000000){ //5MB
                            try{
                                $newPath = $upload.md5_file($image["tmp_name"]).".".$fileExtension;
                                move_uploaded_file($image["tmp_name"], $newPath);
                                $newPath = realpath($newPath);
                                
                                $categoryName = existDettaglio($conn, $category);
                                $dettaglio = existDettaglio($conn, $exactId);
                                if($categoryName && $dettaglio){
                                    if((int)$category == (int)$dettaglio){
                                        $sql = "INSERT INTO pianta (nickname, email, idCategoria, idDettaglio, dataNascita, image, altezza) VALUES (:nickname, :email, :category, :exactId, :born, :image, :height)";
                                        $query = $conn->prepare($sql);
                                        $query->bindValue(':nickname', $nickname, PDO::PARAM_STR);
                                        $query->bindValue(':email', $user["email"], PDO::PARAM_STR);
                                        $query->bindValue(':category', $category, PDO::PARAM_INT);
                                        $query->bindValue(':exactId', $exactId, PDO::PARAM_INT);
                                        $query->bindValue(':born', $born, PDO::PARAM_STR);
                                        $query->bindValue(':image', $newPath, PDO::PARAM_STR);
                                        $query->bindValue(':height', $height, PDO::PARAM_INT); //cm
                                        $query->execute();

                                        if($query->rowCount() == 1){
                                            sendResponse(201, "Pianta inserita con successo", [
                                                "type" => "pianta",
                                                "attributes" => [
                                                    "nickname" => $nickname, 
                                                    "category" => $categoryName, 
                                                    "image" => $newPath,
                                                    "born" => $born,
                                                    "height" => $height
                                                ]
                                            ]);
                                        }else{
                                            sendResponse(500, "Impossibile inserire la pianta");
                                        }
                                    }else{
                                        sendResponse(422, "Categoria e ID del tipo di pianta non corrispondono");
                                    }
                                }else{
                                    sendResponse(422, "Categoria o ID del tipo di pianta non valido");
                                }
                            }catch(Exception $e){
                                sendResponse(500, "Errore interno del server", ["error" => $e->getMessage()]);
                            }
                        }else{
                            sendResponse(422, "Immagine troppo grande");
                        }
                    }else{
                        sendResponse(422, "Immagine non valida");
                    }
                }
            }
        }
    } else {
        sendResponse(401, "Token non valido");
    }

    function getCategoryFromID($conn, $category){
        try{
            $sql = "SELECT nome FROM categoria WHERE id = :category";
            $query = $conn->prepare($sql);
            $query->bindValue(':category', $category, PDO::PARAM_INT);
            $query->execute();

            if($query->rowCount() == 1){
                $row = $query->fetch(PDO::FETCH_ASSOC);
                return $row["nome"];
            }else{
                return false;
            }          
        }catch(PDOException $e){
            sendResponse(500, "Errore interno del server", ["error" => $e->getMessage()]);
        }
    }

    function existDettaglio($conn, $exactId){
        try{
            $sql = "SELECT idCategoria FROM dettaglio WHERE id = :exactId";
            $query = $conn->prepare($sql);
            $query->bindValue(':exactId', $exactId, PDO::PARAM_INT);
            $query->execute();

            if($query->rowCount() == 1){
                $row = $query->fetch(PDO::FETCH_ASSOC);
                return $row["idCategoria"];
            }else{
                return false;
            }          
        }catch(PDOException $e){
            sendResponse(500, "Errore interno del server", ["error" => $e->getMessage()]);
        }
    }
?>