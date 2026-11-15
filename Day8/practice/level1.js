// Exercise 1
function square(num) {
  return num * num;
}

console.log(square(5));
console.log(square(4));
console.log(square(10));
// Exercise 2
const isEven = (n) => n % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(10));
// Exercise 3
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);
console.log("Length:", fruits.length);

fruits.unshift("Pineapple");
fruits.push("Watermelon");

console.log("After adding:", fruits);

fruits.pop();

console.log("After removing:", fruits);
// Exercise 4
const colors = ["Red", "Blue", "Green", "Yellow"];

console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("Using for...of:");
for (const color of colors) {
  console.log(color);
}

console.log("Using forEach:");
colors.forEach((color) => {
  console.log(color);
});
// Exercise 5
const fruitsList = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Mango exists:", fruitsList.includes("Mango"));
console.log("Mango position:", fruitsList.indexOf("Mango"));
// Exercise 6
const person = {
  name: "Salman",
  age: 21,
  city: "Namakkal",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log(person.name);
console.log(person["age"]);
console.log(person.city);
console.log(person["skills"]);
// Exercise 7
const employee = {
  name: "Salman",
  age: 21,
  city: "Namakkal"
};

employee.role = "Developer";

delete employee.age;

console.log("Updated Object:", employee);
console.log("Object Keys:", Object.keys(employee));
// Exercise 8
const student = {
  name: "Salman",
  age: 21,
  course: "BCA"
};

const jsonText = JSON.stringify(student);

console.log("JSON Text:", jsonText);

const convertedObject = JSON.parse(jsonText);

console.log("Converted Object:", convertedObject);
console.log("Student Name:", convertedObject.name);
