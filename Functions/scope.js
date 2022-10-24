"use strict";
function test1(){
    let a = 10;
    if(a > 5){
        a = 7;
    }
    console.log("a = " + a);
}
// should print out a = 7
test1();

function test2A(){
    if(1 == 1){
        var a = 5;
    }
    console.log("a = " + a);
}
//should output a = 5
test2A();

function test2B(){
    if(1 == 1){
        let a = 5;
    }
    //console.log("a = " + a);
}
//should output undefined because let is block scoped
test2B();

// let a = 4;
// function test3(){
//     a = 3;
//     console.log("a = "+ a);
// }
//output should be a = 3
//output should be a = 3
// test3();
// console.log("a = " + a);

// let a  = 4;
// function test4(){
//     let a = 7;
//     console.log("a = " + a);
// }
// test4();
// console.log("a = " + a);

// let a = 4;
// function test5(){
//     a = 7;
//     function again(){
//         let a = 8;
//         console.log("a = " + a);
//     }
//     again();
//     console.log("a = " + a);
// }

// test5();
// console.log("a = " + a);
// //a = 8
// //a = 7
// //a = 7

let a = 4;
function test6(){
    let a = 7;
    function again(){
        let a = 8;
        console.log("a = " + a);
    }
    again();
    console.log("a = " + a);
}
test6();
console.log("a = " + a);

// a = 8
// a = 7
// a = 4