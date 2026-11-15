// Testing - Exercise 1
function square(num) {
  return num * num;
}

console.log("Q1:", square(5));
console.log("Q1 Test:", square(5) === 25 ? "PASS" : "FAIL");
// Testing - Exercise 2
const isEven = (n) => n % 2 === 0;

console.log("Q2:", isEven(4));
console.log("Q2 Test:", isEven(4) === true ? "PASS" : "FAIL");
// Testing - Exercise 3
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Q3 First:", fruits[0]);
console.log("Q3 Last:", fruits[fruits.length - 1]);
console.log("Q3 Length:", fruits.length);

fruits.unshift("Pineapple");
fruits.push("Watermelon");
fruits.pop();

console.log("Q3 Test:", 
  fruits.length === 6 && fruits[0] === "Pineapple"
    ? "PASS"
    : "FAIL"
);
// Testing - Exercise 4
const colors = ["Red", "Blue", "Green", "Yellow"];

let forCount = 0;
for (let i = 0; i < colors.length; i++) {
  forCount++;
}

let ofCount = 0;
for (const color of colors) {
  ofCount++;
}

let eachCount = 0;
colors.forEach(() => {
  eachCount++;
});

console.log("Q4 For:", forCount);
console.log("Q4 For...of:", ofCount);
console.log("Q4 forEach:", eachCount);

console.log(
  "Q4 Test:",
  forCount === 4 && ofCount === 4 && eachCount === 4
    ? "PASS"
    : "FAIL"
);
// Testing - Exercise 5
const fruitsList = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Q5 Exists:", fruitsList.includes("Mango"));
console.log("Q5 Position:", fruitsList.indexOf("Mango"));

console.log(
  "Q5 Test:",
  fruitsList.includes("Mango") && fruitsList.indexOf("Mango") === 2
    ? "PASS"
    : "FAIL"
);
// Testing - Exercise 6
const person = {
  name: "Salman",
  age: 21,
  city: "Namakkal",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log("Q6 Name:", person.name);
console.log("Q6 Age:", person["age"]);
console.log("Q6 City:", person.city);
console.log("Q6 Skills:", person["skills"]);

console.log(
  "Q6 Test:",
  person.name === "Salman" &&
  person.age === 21 &&
  person.city === "Namakkal" &&
  person.skills.length === 3
    ? "PASS"
    : "FAIL"
);
// Testing - Exercise 7
const employee = {
  name: "Salman",
  age: 21,
  city: "Namakkal"
};

employee.role = "Developer";
delete employee.age;

console.log("Q7 Object:", employee);
console.log("Q7 Keys:", Object.keys(employee));

console.log(
  "Q7 Test:",
  employee.role === "Developer" &&
  !("age" in employee) &&
  Object.keys(employee).length === 3
    ? "PASS"
    : "FAIL"
);
// Testing - Exercise 8
const student = {
  name: "Salman",
  age: 21,
  course: "BCA"
};

const jsonText = JSON.stringify(student);
const convertedObject = JSON.parse(jsonText);

console.log("Q8 JSON:", jsonText);
console.log("Q8 Object:", convertedObject);

console.log(
  "Q8 Test:",
  convertedObject.name === "Salman" &&
  convertedObject.age === 21 &&
  convertedObject.course === "BCA"
    ? "PASS"
    : "FAIL"
);
