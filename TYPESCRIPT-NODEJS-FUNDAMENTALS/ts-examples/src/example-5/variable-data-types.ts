// Part 1 - Basic Variables
// Declare a variable with a specific type
let message: string = "Hello, TypeScript";
console.log("Message: ", message);

// Part 2 - Arrays
// Declare an array of numbers
let numbers: number[] = [1, 2, 3];
console.log("Numbers Array: ", numbers);
console.log("Numbers Array at index 1: ", numbers[1]);

// Part 3 - var, let, and const
// 'var' variable can be redeclared and be reassigned
var varVariable = "I'm a var variable";
console.log("VAR: ", varVariable);
varVariable = "I've been reassigned";
console.log("VAR2: ", varVariable);

// 'let' variable can't be redeclared but can be reassigned
let letVariable = "I'm a let variable";
console.log("LET: ", letVariable);
letVariable = "I've been reassigned";
console.log("LET2: ", letVariable);

// 'const' variable can't be redeclared or reassigned
const constVariable = "I'm a const variable";
console.log("CONST: ", constVariable);
// constVariable = "I've been reassigned";   // Cannot assign to 'constVariable' because it is a constant.ts(2588)
console.log("CONST2: ", constVariable);
