<?php
$input = $_POST['input'];
switch ($input) {
    case 'a':
        $results = "$input is a vowel";
        break;
    case 'e':
        $results = "$input is a vowel";
        break;
    case 'i':
        $results = "$input is a vowel";
        break;
    case 'o':
        $results = "$input is a vowel";
        break;
    case 'u':
        $results = "$input is a vowel";
        break;
    default:
    if (ctype_digit($input)) {
        $results = "Enter an alphabet not a number(s)";
    }
    else if (strlen($input) > 1) {
        $results = "Enter one alphabet";
    }

    else{
        $results = "$input is not a vowel";
    }
}
?>

<html>
    <body>
    <p><b>Using switch to check if the alphabet is a vowel</b><p>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>">
            <input type="text" name="input" placeholder="Enter an alphabet" required><br><br>
            <input type = "submit" value="Evaluate">
            <input type="text" value="<?php echo $results?>" readonly>
        </form>
    </body>
</html>