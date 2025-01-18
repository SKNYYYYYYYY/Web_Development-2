<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $num=intval($_POST["num"]);
    switch($num){
        case 1:
            $num="Monday";
            break;
        case 2:
            $num="Tuesday";
            break;
        case 3:
            $num="Wednesday";
            break;
        case 4:
            $num="Thursday";
            break;
        case 5:
            $num="Friday";
            break;
        case 6:
            $num="Saturday";
            break;
        case 7:
            $num="Sunday";
            break;
    }
    echo "<p><strong>Corresponding day:</strong> " . htmlspecialchars($num) . "</p>";
}
?>
