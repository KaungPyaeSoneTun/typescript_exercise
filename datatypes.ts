let lname = 'Robinson';

let num = 10;

let fname : string = 'Harbe';

console.log("fname: ", fname, ", last name: ", lname.toUpperCase());

console.log("Number: ", num);

let result = parseInt("78");

console.log("parse int result: ", result);

let isValid : boolean = false;

console.log("valid: ",isValid);

let egList : string[] = ["Harbe", "example"];

let depList : Array<string> = ["Kaung"];

console.log("EG list: ",egList,"Dep list: ", depList)

let numList : number[] = [1,2,3,4,5,6,7,8,9,10,100,101,103,123,53225];

let nResult = numList.filter((num) => num%2);

console.log("Filter result: ", nResult);

let findRes = numList.find((num) => num === 2);

console.log(findRes);

let sum = numList.reduce((num1,num2) => num1 + num2);

console.log("Sum: ", sum);

// Enum
const enum Color {
    Purple,
    Cyan,
    Orange,
    Turquoise
}

let cyan : Color = Color.Cyan;

// turple

let swapNums: [number, string];

function swapNumbers(num1: number, num2: number): [any, any] {
    return[num2, num1];
}

swapNums = swapNumbers(10, 20);

console.log("Swapped",swapNums)

// any
let anything :any;
anything = 10;
anything = "10";


// void
