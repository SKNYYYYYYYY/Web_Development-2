<?php
$input = $_POST['input'];

if ($input >= 1 && $input <= 100){
    $results =  "$input  is in the range 1-100.";
}
else{
    $results = "$input is not in the range 1-100. ";
}
?>

<html>
    <body>
        <!-- <p><b>Using if else if to check if the alphabet is a vowel</b><p> -->
        <form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>">
            <input type="number" name="input" placeholder="Enter a number" required><br><br>
            <input type = "submit" value="Evaluate">
            <input type="text" value="<?php echo $results?>" readonly>
        </form>
    </body>
</html>