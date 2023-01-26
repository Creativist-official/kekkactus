<?php
    function cleanInputs($input, $regex=null) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = strip_tags($input);
        $input = htmlspecialchars($input);
        $input = str_replace(' ', '', $input);
        $regex != null && $input = preg_replace($regex, '', $input);
        return $input;
        //'/[^A-Za-z0-9\-]/'
    }
?>