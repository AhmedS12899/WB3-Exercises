function convertFtoC(fahrenheit){
    return 5/9*(Number(fahrenheit)-32);
}
let currentTemp = 212;
let celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " is " + celsiusTemp.toFixed(2));

currentTemp = 90;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " is " + celsiusTemp.toFixed(2));

currentTemp = 72;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " is " + celsiusTemp.toFixed(2));

currentTemp = 32;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " is " + celsiusTemp.toFixed(2));

currentTemp = 0;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " is " + celsiusTemp.toFixed(2));

currentTemp = -40;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " is " + celsiusTemp.toFixed(2));