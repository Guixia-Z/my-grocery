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
    
    var streetName = document.getElementById("streetName");
    if(streetName.value.length === 0){
        alert("Please enter street name.");
        streetName.focus();
        streetName.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }

    var city = document.getElementById("city");
    if(city.value.length === 0){
        alert("Please enter street name.");
        streetName.focus();
        streetName.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        return false;
    }
   
}

