"use strict";
let startDate = "July 11, 2022";
let endDate = "November 11, 2022";
let milisecondDay = 1000 * 60 * 60 * 24;

let ds = new Date(startDate).getTime();
let de = new Date(endDate).getTime();

let diff = de-ds;
console.log(Math.round(diff/milisecondDay));