"use strict";

window.onload = init;

function init(){
    let calBtn = document.getElementById("calculateBtn");
    calBtn.onclick = displayDate;
}

function displayDate(){
    let dateField = document.getElementById("dateField");
    let date = dateField.value;
    let d = new Date(date);
    let displayField = document.getElementById("display");
    displayField.innerHTML = d.toString();
}