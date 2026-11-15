// Testing - Question 1
function add(a, b) {
  return a + b;
}

let r = add(1, 2);

console.log("Q1 Output:", r + 1);
console.log("Q1 Test:", r + 1 === 4 ? "PASS" : "FAIL");
// Testing - Question 2
const greet = () => "Hi";

console.log("Q2 Output:", greet());
console.log("Q2 Test:", greet() === "Hi" ? "PASS" : "FAIL");
// Testing - Question 3
const nums = [10, 9, 1, 100];

nums.sort((a, b) => a - b);

console.log("Q3 Output:", nums);
console.log(
  "Q3 Test:",
  JSON.stringify(nums) === JSON.stringify([1, 9, 10, 100])
    ? "PASS"
    : "FAIL"
);
// Testing - Question 4
const prices = [];

const total = prices.reduce((s, p) => s + p, 0);

console.log("Q4 Output:", total);
console.log("Q4 Test:", total === 0 ? "PASS" : "FAIL");
// Testing - Question 5
const student = { name: "Asha" };

console.log("Q5 Output:", student.name);
console.log("Q5 Test:", student.name === "Asha" ? "PASS" : "FAIL");
// Testing - Question 6
const data = JSON.parse('{"name": "Asha"}');

console.log("Q6 Output:", data.name);
console.log("Q6 Test:", data.name === "Asha" ? "PASS" : "FAIL");
// Testing - Question 7
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log("Q7 Original:", original);
console.log("Q7 Copy:", copy);

console.log(
  "Q7 Test:",
  JSON.stringify(original) === JSON.stringify([1, 2, 3]) &&
  JSON.stringify(copy) === JSON.stringify([1, 2, 3, 4])
    ? "PASS"
    : "FAIL"
);
// Testing - Question 8
const person = {
  name: "Ravi",
  show() {
    return this.name;
  }
};

console.log("Q8 Output:", person.show());
console.log("Q8 Test:", person.show() === "Ravi" ? "PASS" : "FAIL");