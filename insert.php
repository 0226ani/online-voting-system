<?php
include("connect.php");
error_reporting(0);
//$username=$_POST['USER_NAME'];
//$email=$_POST['EMAIL'];
///$pwd=$_POST['PASS_WORD'];
//$pwd1=$_POST['PASS_WORD1'];

//$dbconnect=mysqli_connect('localhost','root','','example');

//if(mysqli_connect_errno($dbconnect)){
  //  echo "failed to connect";

//}
//else{
  //  echo "connection sucessful";
//}



$sql="insert into registeration values('','$username','$email','$pwd','$pwd1')";
$run=mysqli_query( $dbconnect,$sql);
if($run)
{
    echo "data inserted";
}
else
{
    echo "not inserted";
}
?>