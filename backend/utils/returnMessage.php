<?php
function sendResponse($statusCode,$message,$extra = []){
    $json = array_merge([
        'success' => $statusCode >= 200 && $statusCode < 300 ? true : false,
        'statusCode' => $statusCode,
        'message' => $message
    ],$extra);

    http_response_code($statusCode);
    echo json_encode($json);
    return;
}
?>