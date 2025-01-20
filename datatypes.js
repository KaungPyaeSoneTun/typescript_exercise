"use strict";
let lname = 'Robinson';
let num = 10;
let fname = 'Harbe';
console.log("fname: ", fname, ", last name: ", lname.toUpperCase());
console.log("Number: ", num);
let result = parseInt("78");
console.log("parse int result: ", result);
let isValid = false;
console.log("valid: ", isValid);
let egList = ["Harbe", "example"];
let depList = ["Kaung"];
console.log("EG list: ", egList, "Dep list: ", depList);
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 101, 103, 123, 53225];
let nResult = numList.filter((num) => num % 2);
console.log("Filter result: ", nResult);
let findRes = numList.find((num) => num === 2);
console.log(findRes);
let sum = numList.reduce((num1, num2) => num1 + num2);
console.log("Sum: ", sum);
let cyan = 1 /* Color.Cyan */;
// turple
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log("Swapped", swapNums);
// any
let anything;
anything = 10;
anything = "10";
// void
