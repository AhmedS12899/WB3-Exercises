function convertCtoF(celsius){
    return 1.8*celsius + 32;
}

let celsius = 100;
let fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = 45;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = 19;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = 0;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = -7;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = -40;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));