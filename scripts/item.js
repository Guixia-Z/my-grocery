"use strict";

function calculateItemPrice(){
    let quantity = document.getElementById("item1");
    let qIndex = quantity.selectedIndex;

    let itemOrder = 2 * quantity.options[qIndex].value;
    document.getElementById("cartAmount").innerHTML = "$" + itemOrder.toFixed(2);
}