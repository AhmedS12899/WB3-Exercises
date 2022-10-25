"use strict";

function getSupplier(code){
    return code.slice(0, code.indexOf(":"))
}

function getProductNumber(code){
    return code.slice(code.indexOf(":")+1, code.indexOf("-"));
}

function getSize(code){
    return code.slice(code.indexOf("-")+1);
}
let s1 = "ACME:123-L";
let s2 = "DI:12345-M";
let s3 = "ACE:1-12";

console.log(`The size is (${getSize(s1)}) part ${getProductNumber(s1)} is supplied by ${getSupplier(s1)}`);
console.log(`The size is (${getSize(s2)}) part ${getProductNumber(s2)} is supplied by ${getSupplier(s2)}`);
console.log(`The size is (${getSize(s3)}) part ${getProductNumber(s3)} is supplied by ${getSupplier(s3)}`);
