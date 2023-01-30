<?php
function putHeaders($metodo){
    $metodo=strtoupper($metodo);
    if($metodo!="GET" && $metodo!="POST" && $metodo!="PUT" && $metodo!="DELETE"){
        die("metodo non valido");
    }else{
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods:$metodo");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: access");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    }
}
?>