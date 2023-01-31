<?php
function putHeaders($metodo, $credentials=false){
    $metodo=strtoupper($metodo);
    if($metodo!="GET" && $metodo!="POST" && $metodo!="PUT" && $metodo!="DELETE"){
        die("metodo non valido");
    }else{
        header("Access-Control-Allow-Origin: http://127.0.0.1:5173");
        $credentials && header("Access-Control-Allow-Credentials: true");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods:$metodo");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: access");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    }
}
?>