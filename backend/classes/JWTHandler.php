<?php
require __DIR__.'/../vendor/autoload.php';

use \Firebase\JWT\JWT;

class JWTHandler{
    protected $secret;
    protected $rilascio;
    protected $scadenza;

    public function __construct(){
        date_default_timezone_set('Europe/Rome');
        $this->rilascio = time();

        $this->scadenza = $this->rilascio + 3600; //1 ora

        $this->secret = "che_bel_kactus"; //Segreto per la firma del token
    }

    public function encodeData($iss, $data){
        $token = array(
            "iss" => $iss, //(Chi emette il token)
            "aud" => $iss,
            "iat" => $this->rilascio,
            "exp" => $this->scadenza,
            "data" => $data
        );

        $jwt = JWT::encode($token, $this->secret, 'HS256');
        return $jwt;
    }

    public function decodeData($jwt_token){
        try {
            $decode = JWT::decode($jwt_token, $this->secret, array('HS256'));
            return [
                "data" => $decode->data
            ];
        } catch (Exception $e) {
            return [
                "message" => $e->getMessage()
            ];
        }
    }
}
?>