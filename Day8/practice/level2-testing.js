// Testing - Exercise 1
{
  const numbers = [10, 45, 23, 89, 12, 67];

  function maxUsingLoop(arr) {
    let maximum = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
      }
    }

    return maximum;
  }

  function maxUsingReduce(arr) {
    return arr.reduce((max, num) =>
      num > max ? num : max, arr[0]
    );
  }

  console.log("Q1 Loop:", maxUsingLoop(numbers));
  console.log("Q1 Reduce:", maxUsingReduce(numbers));

  console.log(
    "Q1 Test:",
    maxUsingLoop(numbers) === 89 &&
    maxUsingReduce(numbers) === 89 ? "PASS" : "FAIL"
  );
}
// Testing - Exercise 2
{
  function calculatePrice(price, gst = 18) {
    return price + (price * gst / 100);
  }

  console.log("Q2 Default GST:", calculatePrice(1000));
  console.log("Q2 Custom GST:", calculatePrice(1000, 12));

  console.log(
    "Q2 Test:",
    calculatePrice(1000) === 1180 &&
    calculatePrice(1000, 12) === 1120
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 3
{
  const celsius = [0, 20, 30, 40];

  const fahrenheit = celsius.map(
    (temp) => (temp * 9 / 5) + 32
  );

  console.log("Q3 Fahrenheit:", fahrenheit);

  console.log(
    "Q3 Test:",
    JSON.stringify(fahrenheit) === JSON.stringify([32, 68, 86, 104])
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 4
{
  const numbers = [1, 2, 3, 4, 5, 6, 8];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  const words = ["Apple", "Cat", "Banana", "Dog", "Orange"];
  const longWords = words.filter((word) => word.length > 4);

  console.log("Q4 Even Numbers:", evenNumbers);
  console.log("Q4 Long Words:", longWords);

  console.log(
    "Q4 Test:",
    JSON.stringify(evenNumbers) === JSON.stringify([2, 4, 6, 8]) &&
    JSON.stringify(longWords) === JSON.stringify(["Apple", "Banana", "Orange"])
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 5
{
  const numbers = [25, 60, 45, 80, 35, 90];

  const total = numbers.reduce((sum, num) => sum + num, 0);
  const highest = numbers.reduce((max, num) => num > max ? num : max);
  const count = numbers.reduce(
    (count, num) => num > 50 ? count + 1 : count, 0
  );

  console.log("Q5 Total:", total);
  console.log("Q5 Highest:", highest);
  console.log("Q5 Count above 50:", count);

  console.log(
    "Q5 Test:",
    total === 335 && highest === 90 && count === 3
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 6
{
  const numbers = [45, 12, 89, 23, 5];

  const ascending = [...numbers].sort((a, b) => a - b);
  const descending = [...numbers].sort((a, b) => b - a);

  const names = ["Ravi", "Asha", "Kumar", "Bala"];
  const sortedNames = [...names].sort();

  const students = [
    { name: "Asha", marks: 85 },
    { name: "Ravi", marks: 95 },
    { name: "Kumar", marks: 75 }
  ];

  const sortedStudents = [...students].sort(
    (a, b) => b.marks - a.marks
  );

  console.log("Q6 Ascending:", ascending);
  console.log("Q6 Descending:", descending);
  console.log("Q6 Names:", sortedNames);
  console.log("Q6 Topper:", sortedStudents[0].name);

  console.log(
    "Q6 Test:",
    ascending[0] === 5 &&
    descending[0] === 89 &&
    sortedNames[0] === "Asha" &&
    sortedStudents[0].name === "Ravi"
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 7
{
  const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

  const uniqueFilter = numbers.filter(
    (num, index) => numbers.indexOf(num) === index
  );

  const uniqueSet = [...new Set(numbers)];

  console.log("Q7 Filter:", uniqueFilter);
  console.log("Q7 Set:", uniqueSet);

  console.log(
    "Q7 Test:",
    JSON.stringify(uniqueFilter) === JSON.stringify([1, 2, 3, 4, 5]) &&
    JSON.stringify(uniqueSet) === JSON.stringify([1, 2, 3, 4, 5])
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 8
{
  const sentence = "apple banana apple orange banana apple";
  const words = sentence.split(" ");

  const frequency = {};

  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  console.log("Q8 Frequency:", frequency);

  console.log(
    "Q8 Test:",
    frequency.apple === 3 &&
    frequency.banana === 2 &&
    frequency.orange === 1
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 9
{
  const students = [
    { name: "Arun", marks: 85 },
    { name: "Bala", marks: 35 },
    { name: "Charan", marks: 92 },
    { name: "Deepa", marks: 45 },
    { name: "Ezhil", marks: 28 }
  ];

  const names = students.map((student) => student.name);

  const topper = students.reduce((top, student) =>
    student.marks > top.marks ? student : top
  );

  const total = students.reduce((sum, student) => sum + student.marks, 0);
  const average = total / students.length;

  const failed = students.filter((student) => student.marks < 40);

  console.log("Q9 Names:", names);
  console.log("Q9 Topper:", topper.name);
  console.log("Q9 Average:", average);
  console.log("Q9 Failed:", failed.map((student) => student.name));

  console.log(
    "Q9 Test:",
    topper.name === "Charan" &&
    average === 57 &&
    failed.length === 2
      ? "PASS"
      : "FAIL"
  );
}
// Testing - Exercise 10
{
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

  const result = objectToText(product);

  console.log("Q10 Output:\n" + result);

  console.log(
    "Q10 Test:",
    result === "name: Laptop\nprice: 45000\nbrand: Dell"
      ? "PASS"
      : "FAIL"
  );
}
