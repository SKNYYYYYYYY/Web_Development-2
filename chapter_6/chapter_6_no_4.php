<?php
$num = $_POST['num'];
($num % 2 == 0)? $string = "$num is an even number" : $string = "$num is an odd number";
?>
<html>
    <body>
    <p><b><i>Using ternery operator to check if the digit is a even or odd<i></b><p>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>">
            <input type="number" name="num" placeholder="Enter a number" required><br><br>
            <input type = "submit" value="check">
            <input type="text" value="<?php echo $string?>" readonly>
        </form>
    </body>
</html>