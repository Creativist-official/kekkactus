<?php
class Database {
    private $db_host = 'localhost';
    private $db_name = 'kekkactus';
    private $db_username = 'root';
    private $db_password = 'root';
    
    public function connect(){
        try{
            $conn = new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name,$this->db_username,$this->db_password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Lancia eccezzioni PDO
            return $conn;
        }
        catch(PDOException $e){
            echo "Errore di connessione ".$e->getMessage(); 
            exit;
        }
          
    }
}
?>