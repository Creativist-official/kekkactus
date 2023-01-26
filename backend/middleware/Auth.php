<?php
    require __DIR__.'/classes/JwtHandler.php';

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
                $data = $this->decodeData($matches[1]);
            } else {
                return false;
            }
        }
    }
?>