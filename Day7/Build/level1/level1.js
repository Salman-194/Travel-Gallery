// Exercise 1: Name and Age

const myName = "Salman";
let myAge = 21;

console.log(`My name is ${myName} and I am ${myAge} years old.`);
// Exercise 2: Swap Two Variables

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
// Exercise 3: Celsius to Fahrenheit

const celsius = 37;

const fahrenheit = celsius * 9 / 5 + 32;

console.log("Temperature in Celsius:", celsius);
console.log("Temperature in Fahrenheit:", fahrenheit);
// Exercise 4: Even or Odd

const number = 15;

const result = number % 2 === 0 ? "Even" : "Odd";

console.log(number, "is", result);
// Exercise 5: Basic Calculator

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
// Exercise 6: For and While Loops

console.log("1 to 10:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("10 to 1:");

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}
// Exercise 7: Multiplication Table

let tableNumber = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(
        tableNumber + " x " + i + " = " + tableNumber * i
    );
}
// Exercise 8: Largest of Three Numbers

let numA = 10;
let numB = 25;
let numC = 15;

if (numA >= numB && numA >= numC) {
    console.log("Largest number is:", numA);
} else if (numB >= numA && numB >= numC) {
    console.log("Largest number is:", numB);
} else {
    console.log("Largest number is:", numC);
}