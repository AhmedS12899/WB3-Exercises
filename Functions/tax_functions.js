function getSocSecTax(gross) {
    return gross * 0.062;
}

function getMedicareTax(gross) {
    return gross * 0.0145;
}

function getFederalTax(gross, code) {
    switch (code) {
        case 0:
            return gross * .23;
            break;
        case 1:
            return gross * .21;
            break;
        case 2:
            return gross * .195;
            break;
        case 3:
            return gross * .185;
            break;
        default: code >= 4;
            return gross * (.18 - (code - 4) * 0.005);
            break;
    }
}
let gross = 750;
let code = 0;
console.log("Person 1: gross pay $" + gross + ", withholding code is " + code + ", tax is " + getFederalTax(gross, code).toFixed(2));

gross = 1550;
code = 2;
console.log("Person 2: gross pay $" + gross + ", withholding code is " + code + ", tax is " + getFederalTax(gross, code).toFixed(2));

gross = 1100;
code = 6;
console.log("Person 3: gross pay $" + gross + ", withholding code is " + code + ", tax is " + getFederalTax(gross, code).toFixed(2));