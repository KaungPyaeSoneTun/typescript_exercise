"use strict";
// function
// first way to write func
function add(a, b) {
    return a + b;
}
// 2nd way to write func
function substract(a, b) {
    return a - b;
}
// 3rd way to write func
const mul = (a, b) => a * b;
// 4th way to write func
const division = function (num1, num2) {
    return num1 / num2;
};
//func with opitional paramters
function addd(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
addd(1, 2);
addd(1, 2, 3);
// func with required parameters
function subb(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
subb(1, 2);
subb(1, 2, 3);
// func with rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, 4, 45, 6, 78, 8, 9, 0, 1));
// generatic func
// T or Type is just a placeholder, doesn't mean a thing
function getItems(items) {
    return new Array().concat(items);
}
let concatNumber = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c']);
let concatChar = getItems(["a", "b", "c"]);
