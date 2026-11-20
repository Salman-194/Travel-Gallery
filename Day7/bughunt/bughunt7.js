
let Price = 500
const quantity = 3;
let discount;
if (quantity === 3) {
  discount = 0.1;
}
let total = Price * quantity * (1 - discount);
console.log("Total is " + total.toFixed(2));

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log("Round " + count);
  count++;
}

let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Try again");
}

let age = prompt("Age?");
if (age > 17 && age < 60) {
  console.log("Eligible");
}
console.log(Math.random());
let secondName = "Ravi";
let user = "Asha";
const PI = 3.14;
