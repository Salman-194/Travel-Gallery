// Exercise 1 - Find Maximum

const numbers = [10, 45, 23, 89, 12, 67];

// Using for loop
function maxUsingLoop(arr) {
  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  return maximum;
}

// Using reduce()
function maxUsingReduce(arr) {
  return arr.reduce((max, num) => {
    return num > max ? num : max;
  }, arr[0]);
}

console.log("Using Loop:", maxUsingLoop(numbers));
console.log("Using Reduce:", maxUsingReduce(numbers));
// Exercise 2 - Price with GST

function calculatePrice(price, gst = 18) {
  return price + (price * gst / 100);
}

console.log("Price with GST:", calculatePrice(1000));
console.log("Price with 12% GST:", calculatePrice(1000, 12));
// Exercise 3 - Celsius to Fahrenheit

const celsius = [0, 20, 30, 40];

const fahrenheit = celsius.map((temp) => {
  return (temp * 9 / 5) + 32;
});

console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);
// Exercise 4 - Filter

const numbers = [1, 2, 3, 4, 5, 6, 8];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);

const words = ["Apple", "Cat", "Banana", "Dog", "Orange"];

const longWords = words.filter((word) => word.length > 4);

console.log("Long Words:", longWords);
// Exercise 5 - Reduce

const numbers = [25, 60, 45, 80, 35, 90];

// Total
const total = numbers.reduce((sum, num) => sum + num, 0);

// Highest value
const highest = numbers.reduce((max, num) =>
  num > max ? num : max
);

// Count above 50
const count = numbers.reduce((count, num) =>
  num > 50 ? count + 1 : count, 0
);

console.log("Total:", total);
console.log("Highest:", highest);
console.log("Count above 50:", count);
// Exercise 6 - Sorting

const numbers = [45, 12, 89, 23, 5];

console.log("Ascending:", [...numbers].sort((a, b) => a - b));
console.log("Descending:", [...numbers].sort((a, b) => b - a));

const names = ["Ravi", "Asha", "Kumar", "Bala"];

console.log("Names:", [...names].sort());

const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 95 },
  { name: "Kumar", marks: 75 }
];

const sortedStudents = [...students].sort(
  (a, b) => b.marks - a.marks
);

console.log("Students:", sortedStudents);
// Exercise 7 - Remove Duplicates

const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// Using filter() and indexOf()
const uniqueFilter = numbers.filter(
  (num, index) => numbers.indexOf(num) === index
);

// Using Set
const uniqueSet = [...new Set(numbers)];

console.log("Using filter:", uniqueFilter);
console.log("Using Set:", uniqueSet);
// Exercise 8 - Word Frequency

const sentence = "apple banana apple orange banana apple";

const words = sentence.split(" ");

const frequency = {};

words.forEach((word) => {
  frequency[word] = (frequency[word] || 0) + 1;
});

console.log("Word Frequency:", frequency);
// Exercise 9 - Student Analysis

const students = [
  { name: "Arun", marks: 85 },
  { name: "Bala", marks: 35 },
  { name: "Charan", marks: 92 },
  { name: "Deepa", marks: 45 },
  { name: "Ezhil", marks: 28 }
];

// Student names
const names = students.map((student) => student.name);

// Topper
const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);

// Class average
const total = students.reduce((sum, student) => sum + student.marks, 0);
const average = total / students.length;

// Failed students
const failed = students.filter((student) => student.marks < 40);

console.log("Names:", names);
console.log("Topper:", topper);
console.log("Class Average:", average);
console.log("Failed Students:", failed);
// Exercise 10 - Object.entries()

function objectToText(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

const product = {
  name: "Laptop",
  price: 45000,
  brand: "Dell"
};

console.log(objectToText(product));
