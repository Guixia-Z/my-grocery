"use strict";




function validateCreateAccountForm(){
    var emailField = document.getElementById("email");
    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if(!(emailField.value.match(emailCorrectPattern))) {
        alert("Please correct your email address");
        emailField.value = "";
        emailField.focus();

        emailField.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        
        return false;
    }
    var pwd = document.getElementById("password");
        if(pwd.value.length < 8){
            alert("Please enter at least 8 characters.");
            pwd.value = "";
            pwd.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
            return false;
        }
        if(pwd.value.indexOf(" ") !== -1){
            alert("No spaces in the password, please.");
            pwd.value = "";
            pwd.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
            return false;
        }
        var hasNumber = false;
        for(let counter = 0; counter < pwd.value.length; counter++){
            if(isNaN(counter,counter + 1) === false){
                hasNumber = true;
                break;
            }
        }
        if(hasNumber === false){
            alert("Password must contain at least 1 number");
            pwd.value = "";
            pwd.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
            return false;
        }
        var cpwd = document.getElementById("cPassword");
        if(cpwd.value === pwd.value){
            return true;
        }
        else{
            alert("two passwords are not same.");
            cpwd.value = "";
            pwd.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
            return false;

        }
        
}

