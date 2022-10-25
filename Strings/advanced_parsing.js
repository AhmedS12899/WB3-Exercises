"use strict";
function parseAndDisplayName(name) {
    let posFirstSpace = name.indexOf(" ");
    let posSecondSpace = name.indexOf(" ", posFirstSpace + 1);
    if (posFirstSpace == -1) {
        let posSpace = name.indexOf(" ");
        console.log(`Name: ${name}\nOnly name: ${name}`);
    }
    else if (posFirstSpace != -1 && posSecondSpace == -1) {
        console.log(`Name: ${name}\nFirst name: ${name.slice(0, posFirstSpace)}\nLast name: ${name.slice(posFirstSpace)}`);
    }
    else if (posFirstSpace != -1 && posSecondSpace != -1) {
        console.log(`Name: ${name}\nFirst name: ${name.slice(0, posFirstSpace)}\nMiddle name: ${name.slice(posFirstSpace, posSecondSpace)}\nLast name: ${name.slice(posSecondSpace)}`);
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");