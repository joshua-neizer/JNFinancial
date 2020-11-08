<?php
    // if($_POST["comment"]) {
    //     mail("josh.neizer@gmai.com", "JN Financial - " . $_POST["last"] . ", " . $_POST["first"] ,
    //     "Hello Joseph,\n\n There has been a message from a new client\n" .
    //     "Name: " . $_POST["last"] . ", " . $_POST["first"] . "\n" .
    //     "Email: " . $_POST["email"] . "\n" .
    //     "Phone Number: " . $_POST["telephone"] . "\n\n" .
    //     . "\"" . $_POST["insert your message here"] . "\"");
    // }

    echo "Hello Joseph,\n\n There has been a message from a new client\n" .
    "Name: " . $_POST["last"] . ", " . $_POST["first"] . "\n" .
    "Email: " . $_POST["email"] . "\n" .
    "Phone Number: " . $_POST["telephone"] . "\n\n" .
    . "\"" . $_POST["insert your message here"] . "\""
?>

