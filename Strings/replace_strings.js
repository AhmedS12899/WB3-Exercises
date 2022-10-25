"use strict";
let message = "Our corporate offices are located in Dallas";

let newMessage = message.replace("Dallas","Austin");

console.log(newMessage);

newMessage = message.replace(/dallas/i,"Austin");

console.log(newMessage);
