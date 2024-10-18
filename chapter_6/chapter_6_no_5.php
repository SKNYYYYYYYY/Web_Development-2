<?php
//obtained marks
$math = $_POST['math'];
$english = $_POST['english'];
$physics = $_POST['physics'];

//percentage
$math_percentage = ceil($math * 100 / 70);
$english_percentage = ceil($english * 100 / 70);
$physics_percentage = ceil($physics * 100 / 70);

//grading
function grader($percentage)
{
    if ($percentage >= 70){
        return 'A';
    }
    elseif ($percentage >= 60){
        return 'B';
    }
    elseif ($percentage >= 50){
        return 'C';
    }
    elseif ($percentage >= 40){
        return 'D';
    }
    elseif ($percentage < 40){
        return 'E';
    }
}

$math_grade = grader($math_percentage);
$english_grade = grader($english_percentage);
$physics_grade = grader($physics_percentage);
?>
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
  text-align: center;
  border-collapse: collapse;
}
</style>
</head>
    <body>
    <!-- <p><b><i>Using ternery operator to check if the digit is a even or odd<i></b><p> -->

        <form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>">
            <b>Math:</b>  <input type="number" name="math" placeholder="Enter marks out of 70" required><br>
            <b>English:</b>  <input type="number" name="english" placeholder="Enter marks out of 70" required><br>
            <b>Physics:</b>  <input type="number" name="physics" placeholder="Enter marks out of 70" required><br>
            <input type = "submit" value="create a mark sheet">
        </form>
        <table   border: 1px solid black, border-collapse: collapse>
            <tr>
                <th>Subjects</th>
                <th>Obtain marks</th>
                <th>Percentage</th>
                <th>Grade</th>
            </tr>
            <tr>
                <td>Math</td>
                <td><?php echo $math ?></td>
                <td><?php echo "$math_percentage%"?></td>
                <td><?php echo $math_grade?></td>
            </tr>
            <tr>
                <td>English</td>
                <td><?php echo $english ?></td>
                <td><?php echo "$english_percentage%"?></td>
                <td><?php echo $english_grade?></td>
            </tr>
            <tr>
                <td>Physics</td>
                <td><?php echo $physics ?></td>
                <td><?php echo "$physics_percentage%"?></td>
                <td><?php echo $physics_grade?></td>
            </tr>
        </table>
    </body>
</html>