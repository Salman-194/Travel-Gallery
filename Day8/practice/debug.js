// question 1
function add(a, b) {
  return a + b;
}

let r = add(1, 2);
console.log(r + 1);
// Question 2
const greet = () => "Hi";

console.log(greet());
// Question 3
const nums = [10, 9, 1, 100];

nums.sort((a, b) => a - b);

console.log(nums);
// Question 4
const prices = [];

const total = prices.reduce((s, p) => s + p, 0);

console.log(total);
// Question 5
const student = { name: "Asha" };

console.log(student.name);
// Question 6
const data = JSON.parse('{"name": "Asha"}');

console.log(data.name);
// Question 7
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(original);
console.log(copy);
// Question 8
const person = {
  name: "Ravi",
  show() {
    console.log(this.name);
  }
};

person.show();