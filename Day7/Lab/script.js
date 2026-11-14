
const customer = prompt("Enter customer name:");
const price = 250;
const quantity = Number(prompt("Enter quantity:"));

if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid positive quantity.");
} else {
    const amount = price * quantity;

    const discount = amount > 1000 ? amount * 0.10 : amount * 0.05;

    const discountedAmount = amount - discount;
    const gst = discountedAmount * 0.18;
    const finalTotal = discountedAmount + gst;

    console.log("----- SMART BILL -----");
    console.log("Customer:", customer);
    console.log("Price: Rs.", price.toFixed(2));
    console.log("Quantity:", quantity);
    console.log("Amount: Rs.", amount.toFixed(2));
    console.log("Discount: Rs.", discount.toFixed(2));
    console.log("GST (18%): Rs.", gst.toFixed(2));
    console.log("Final Total: Rs.", finalTotal.toFixed(2));
}

// STEP 5: GRADE CHECKER

const marks = Number(prompt("Enter your marks (0 to 100):"));

let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A+";
} else if (marks >= 75 && marks < 90) {
    grade = "A";
} else if (marks >= 60 && marks < 75) {
    grade = "B";
} else if (marks >= 40 && marks < 60) {
    grade = "C";
} else if (marks >= 0 && marks < 40) {
    grade = "Fail";
} else {
    grade = "Invalid";
}

console.log("Grade:", grade);

switch (grade) {
    case "A+":
        console.log("Remark: Outstanding!");
        break;
    case "A":
        console.log("Remark: Excellent!");
        break;
    case "B":
        console.log("Remark: Good!");
        break;
    case "C":
        console.log("Remark: Keep Practicing!");
        break;
    case "Fail":
        console.log("Remark: Need Improvement.");
        break;
    default:
        console.log("Remark: Please enter valid marks.");
}

// STEP 6: LOOPS

const tableNumber = Number(prompt("Enter a number for multiplication table:"));

console.log("----- MULTIPLICATION TABLE -----");

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// Sum from 1 to n
const loopLimit = Number(prompt("Enter a number to calculate sum:"));

let counter = 1;
let sum = 0;

while (counter <= loopLimit) {
    sum += counter;
    counter++;
}

console.log("Sum from 1 to", loopLimit, "=", sum);

// Even numbers up to n
console.log("----- EVEN NUMBERS -----");

for (let evenNumber = 2; evenNumber <= loopLimit; evenNumber += 2) {
    console.log(evenNumber);
}

// STEP 7: PATTERNS

console.log("----- STAR TRIANGLE -----");

for (let row = 1; row <= 5; row++) {
    let pattern = "";

    for (let col = 1; col <= row; col++) {
        pattern += "* ";
    }

    console.log(pattern);
}

console.log("----- NUMBER TRIANGLE -----");

for (let row = 1; row <= 5; row++) {
    let pattern = "";

    for (let col = 1; col <= row; col++) {
        pattern += col;
    }

    console.log(pattern);
}

// STEP 8: FIZZBUZZ

console.log("----- FIZZBUZZ -----");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// PRIME NUMBERS FROM 2 TO 50

console.log("----- PRIME NUMBERS -----");

for (let num = 2; num <= 50; num++) {
    let isPrime = true;

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

// STEP 9: DISPLAY BILL ON WEBPAGE

document.getElementById("billButton").addEventListener("click", function () {
    const quantityInput = Number(document.getElementById("quantity").value);
    const output = document.getElementById("output");

    if (isNaN(quantityInput) || quantityInput <= 0) {
        output.textContent = "Please enter a valid quantity.";
        return;
    }

    const pricePerItem = 250;
    const amount = pricePerItem * quantityInput;
    const discount = amount > 1000 ? amount * 0.10 : amount * 0.05;
    const discountedAmount = amount - discount;
    const gst = discountedAmount * 0.18;
    const finalTotal = discountedAmount + gst;

    output.textContent =
        `Amount: Rs. ${amount.toFixed(2)} | ` +
        `Discount: Rs. ${discount.toFixed(2)} | ` +
        `GST: Rs. ${gst.toFixed(2)} | ` +
        `Final Total: Rs. ${finalTotal.toFixed(2)}`;
});

// GRADE CHECKER ON WEBPAGE

document.getElementById("gradeButton").addEventListener("click", function () {
    const marks = Number(document.getElementById("marks").value);
    const gradeOutput = document.getElementById("gradeOutput");

    if (document.getElementById("marks").value === "" || marks < 0 || marks > 100) {
        gradeOutput.textContent = "Please enter marks between 0 and 100.";
        return;
    }

    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 75) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    gradeOutput.textContent = `Grade: ${grade}`;
});
