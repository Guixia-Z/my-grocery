"use strict";


function validateDeliveryInfoForm(){
    var fName = document.getElementById("firstName");
    if(fName.value.length === 0){
        alert("Please enter your first name.");
        fName.focus();
        fName.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    var namePattern = /^[A-Za-z]+$/;
    if(!(fName.value.match(namePattern))){
        alert("Your first name seems a little bizarre.");
        fName.focus();
        fName.value = "";
        fName.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    var lName = document.getElementById("lastName");
    if(lName.value.length === 0){
        alert("Please enter your last name.");
        lName.focus();
        lName.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    if(!(lName.value.match(namePattern))){
        alert("Your last name seems a little bizarre.");
        lName.focus();
        lName.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    var civic = document.getElementById("civicNumber");
    if(civic.value.length === 0){
        alert("Please enter your civic number.");
        civic.focus();
        civic.value = "";
        civic.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    var civicPattern = /^[0-9]*[1-9][0-9]*$/;
    if(!(civic.value.match(civicPattern))){
        alert("Your civic number seems a little bizarre.");
        civic.focus();
        civic.value = "";
        civic.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    
   var streetN = document.getElementById("streetName");
    if(streetN.value.length === 0){
        alert("Please enter street name.");
        streetN.focus();
        streetN.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    var streetPattern = /^[A-Za-z ]*$/;
    if(!(streetN.value.match(streetPattern))){
        alert("Your street name seems a little bizarre.");
        streetN.focus();
        streetN.value = "";
        streetN.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }

    var city = document.getElementById("city");
    if(city.value.length === 0){
        alert("Please enter city name.");
        city.focus();
        city.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }

    var postCode = document.getElementById("postCode");
    if(postCode.value.length === 0){
        alert("Please enter post code.");
        postCode.focus();
        postCode.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }

    var tel = document.getElementById("telephone");
    if(tel.value.length === 0){
        alert("Please enter your phone number. It is important for us.");
        tel.focus();
        tel.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
    var telPattern = /^([1-9]{3})(-)([0-9]{3})(-)([0-9]{4})$/;
    if(!(tel.value.match(telPattern))){
        alert("Your telephone number need to be 888-888-8888");
        tel.focus();
        tel.value = "";
        tel.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
   
}

