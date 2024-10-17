<?php
$result = '';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operator = $_POST['operator'];

    switch ($operator) {
        case '+':
            $result = $num1 + $num2;
            break;
        case '-':
            $result = $num1 - $num2;
            break;
        case '*':
            $result = $num1 * $num2;
            break;
        case '÷':
            if ($num2 != 0) {
                $result = $num1 / $num2;
            } else {
                $result = "Error: Division by zero";
            }
            break;
        default:
            $result = "Invalid operator";
    }
}
?>

<html>
    <body>
        <form method="POST" action="chapter_6_no_1.php">
            Number 1:  <input type="number" name="num1" placeholder="Enter a number"required><br>
            Number 2:  <input type="number" name="num2" placeholder="Enter a number"required><br>
            <br>

            Operator:<br>
            Sum <input type="radio" name="operator" value="+" required >
            Sub <input type="radio" name="operator" value="-" required>
            Mul <input type="radio" name="operator" value="*" required>
            Div <input type="radio" name="operator" value="÷" required>
            <br>
            <br>

            <input type="submit" value="calculate">
            <input type="text" placeholder="output" value="<?php echo "$num1 $operator $num2 = $result"; ?>" readonly>   
        </form>
    </body>
</html>