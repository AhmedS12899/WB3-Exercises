function displayMailingLabel(name, address, city, state, zip){
    console.log(name +  "\n" + address + city + "\n" +  state +  ", " + zip);
}

function addNumbers(num1, num2){
    console.log(num1 + " + " + num2 + " = " + num1+num2);
}

function displayReceipt(totalDue, amountPaid){
    console.log("Total Due: $" + totalDue + "\n " + "Amount Paid: $" + amountPaid + "\n" + "Change Due: $" + totalDue-amountPaid);
}

displayMailingLabel("Ahmed Sharhan" , "86 Wall Street", "NYC", "NY", 11235 );

addNumbers(8 , 24);

displayReceipt(14.77, 20.00);
