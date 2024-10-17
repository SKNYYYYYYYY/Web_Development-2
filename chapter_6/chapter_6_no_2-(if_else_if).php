<?php
$input = $_POST['input'];
if ($input =='a'){
    $results = "$input is a vowel";
}
else if ($input =='e'){
    $results = "$input is a vowel";
}
else if ($input =='i'){
    $results = "$input is a vowel";
}
else if ($input =='o'){
    $results = "$input is a vowel";
}
else if ($input =='u'){
    $results = "$input is a vowel";
}
else{
    $results = "$input is not a vowel";
}
?>

<html>
    <body>
    <p><b>Using if else to check if the alphabet is a vowel</b><p>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>">
            <input type="text" name="input" placeholder="Enter an alphabet" required><br><br>
            <input type = "submit" value="Evaluate">
            <input type="text" value="<?php echo $results?>" readonly>
        </form>
    </body>
</html>