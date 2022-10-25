"use strict";
function parseAndDisplayName(name){
let posSpace = name.indexOf(" ");
console.log(`Name: ${name}\nFirst name: ${name.slice(0,posSpace)} \nLast name: ${name.slice(posSpace)}`);
}

parseAndDisplayName("Brenda Kaye");