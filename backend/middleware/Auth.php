<?php
    require __DIR__.'/../classes/JwtHandler.php';

    class Auth extends JWTHandler{
        protected $db;
        protected $headers;
        protected $token;

        public function __construct($db, $headers){
            parent::__construct();
            $this->db = $db;
            $this->headers = $headers;
        }

        public function isValid(){
            //CHECK HEADER Authorization Bearer
            if (array_key_exists('Authorization', $this->headers) && preg_match('/Bearer\s(\S+)/', $this->headers['Authorization'], $matches)) {
                if(isset($_COOKIE["signature"])){
                    $data = $this->decodeData($matches[1].".".$_COOKIE["signature"]);
                    if(isset($data["data"]->email)){
                        $user = $this->fetchUser($data["data"]->email);
                        if($user){
                            return $user;
                        } else {
                            echo "utente non trovato";
                            return false; //UTENTE NON TROVATO
                        }
                    } else {
                        echo "token non valido";
                        return false; //TOKEN NON VALIDO
                    }
                }else{
                    echo "manca la firma";
                    return false; //MANCA LA FIRMA
                }
            }else{
                echo "token non trasmesso";
                return false; //TOKEN NON TRASMESSO
            }
        }

        protected function fetchUser($email){
            try{
                $sql = "SELECT * FROM utente WHERE email = :email";
                $query = $this->db->prepare($sql);
                $query->bindParam(':email', $email);
                $query->execute();
    
                if($query->rowCount() === 1){
                    return $query->fetch(PDO::FETCH_ASSOC);
                } else {
                    return false;
                }
            } catch(PDOException $e){
                return false;
            }
            
        }
    }
?>