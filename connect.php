<?php
//connecting index.php to database
$username=$_POST['USER_NAME'];
$email=$_POST['EMAIL'];
$pwd=$_POST['PASS_WORD'];
$pwd1=$_POST['PASS_WORD1'];

$dbconnect=mysqli_connect('localhost','root','','example');

if(($dbconnect)){
    echo " ";

}
else{
    echo "unsucessful";
}
?>