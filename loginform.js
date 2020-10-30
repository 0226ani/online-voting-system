function check()
{
    var username=document.getElementById("nameText").value;
    //var namePattern=/^[0-9_@]/;
    //if(username!="/^[a-zA-Z-' ]*$/")
    //alert("Only letters and white space allowed");
    if(username.length<8)
    alert("username should contain your full name and more than 8 characters!! ");
}
function checkEmail()
{
    //var emailPattern=/^[a-zA-Z0-9_]+@[a-z0-9]+\.[a-z]$/;
    var email=document.getElementById("emailText").value;
    if(email!=emailPattern)
    alert("invalid emailID!!");
}
function pwdLength()
{
    var passsword=document.getElementById("passwordType").value;   
    //contain only characters, numeric digits, underscore and first character must be a letter
    //^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$. 
    
    //var passwordPattern=/^[a-zA-z0-9]+@[a-zA-z0-9]$/;
    //if(passsword!=passwordPattern)
    //alert("invalid password!!---");
    if(passsword.length!=8)
    alert("password should have 8 only characters");
}
function pwd1Length()
{
    var passsword1=document.getElementById("passwordTypeConfrim").value;

    if(passsword1.length<8)
    alert("re-enter password should have 8 characters");
   
}
function pwdEquals()
{
    var passsword=document.getElementById("passwordType").value;
    var passsword1=document.getElementById("passwordTypeConfrim").value;
    if(passsword!=passsword1)
    alert("passwords doesnt matvh!!");
    if(passsword!=passsword1)
    alert("Registration failed!")
    //die(alert("passwords doesnt matvh!!"));
    if (passsword==passsword1)
    alert("Sucessfully registered!!")
}



