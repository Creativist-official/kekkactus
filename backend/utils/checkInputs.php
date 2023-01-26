<?php
    function cleanInputs($input, $regex=null) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input);
        $input = str_replace(' ', '', $input);
        $regex != null && $input = preg_replace($regex, '', $input);
        return $input;
        //'/[^A-Za-z0-9\-]/'
    }

    function controlliInput($input, $min=null, $max=null) {
        if(empty($input)) {
            return false;
        }

        if($min != null && $input < $min) {
            return false;
        }
        if($max != null && $input > $max) {
            return false;
        }

        return true;
    }
?>