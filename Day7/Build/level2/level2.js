// Exercise 1: Grade Calculator

let marks = 85;
let grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else if (marks >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Grade:", grade);

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Very Good!");
        break;
    case "C":
        console.log("Good!");
        break;
    case "D":
        console.log("Needs Improvement!");
        break;
    default:
        console.log("Try Again!");
}
// Exercise 2: Leap Year Checker

let year = 2024;

if (year % 400 === 0) {
    console.log(year, "is a Leap Year");
} else if (year % 100 === 0) {
    console.log(year, "is not a Leap Year");
} else if (year % 4 === 0) {
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is not a Leap Year");
}
// Exercise 3: Sum and Average from 1 to n

let limit = 10;
let sum = 0;

for (let i = 1; i <= limit; i++) {
    sum += i;
}

let average = sum / limit;

console.log("Sum:", sum);
console.log("Average:", average);
// Exercise 4: Count the Digits

let digitNumber = 12345;
let digitCount = 0;

while (digitNumber > 0) {
    digitNumber = Math.floor(digitNumber / 10);
    digitCount++;
}

console.log("Number of digits:", digitCount);

// Exercise 5: Reverse a Number
let originalNumber = 1234;
let reverseNumber = 0;

while (originalNumber > 0) {
    let digit = originalNumber % 10;
    reverseNumber = reverseNumber * 10 + digit;
    originalNumber = Math.floor(originalNumber / 10);
}

console.log("Reversed number:", reverseNumber);
// Exercise 6: Palindrome Number Checker

let palindromeNumber = 121;
let tempNumber = palindromeNumber;
let reversedPalindrome = 0;

while (tempNumber > 0) {
    let digit = tempNumber % 10;
    reversedPalindrome = reversedPalindrome * 10 + digit;
    tempNumber = Math.floor(tempNumber / 10);
}

if (palindromeNumber === reversedPalindrome) {
    console.log(palindromeNumber, "is a Palindrome");
} else {
    console.log(palindromeNumber, "is not a Palindrome");
}
// Exercise 7: Prime Numbers up to 50

console.log("Prime numbers from 1 to 50:");

for (let number = 2; number <= 50; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
    }
}

// Exercise 8: FizzBuzz from 1 to 50
let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let fizzNumber = 1; fizzNumber <= 50; fizzNumber++) {
    if (fizzNumber % 3 === 0 && fizzNumber % 5 === 0) {
        console.log("FizzBuzz");
        fizzBuzzCount++;
    } else if (fizzNumber % 3 === 0) {
        console.log("Fizz");
        fizzCount++;
    } else if (fizzNumber % 5 === 0) {
        console.log("Buzz");
        buzzCount++;
    } else {
        console.log(fizzNumber);
    }
}

console.log("Fizz count:", fizzCount);
console.log("Buzz count:", buzzCount);
console.log("FizzBuzz count:", fizzBuzzCount);

// Exercise 9: Number Triangle Pattern
for (let row = 1; row <= 5; row++) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += column;
    }

    console.log(pattern);
}
// Exercise 10: ATM Menu

let balance = 1000;
let choice;

do {
    choice = Number(prompt(
        "ATM Menu\n1. Balance\n2. Deposit\n3. Withdraw\n4. Exit"
    ));

    switch (choice) {
        case 1: {
            console.log("Current Balance:", balance);
            break;
        }

        case 2: {
            let depositAmount = Number(prompt("Enter deposit amount:"));

            if (depositAmount > 0) {
                balance += depositAmount;
                console.log("Deposit successful. Balance:", balance);
            } else {
                console.log("Invalid deposit amount");
            }
            break;
        }

        case 3: {
            let withdrawAmount = Number(prompt("Enter withdrawal amount:"));

            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                console.log("Withdrawal successful. Balance:", balance);
            } else {
                console.log("Insufficient balance or invalid amount");
            }
            break;
        }

        case 4: {
            console.log("Thank you for using the ATM");
            break;
        }

        default: {
            console.log("Invalid choice");
        }
    }
} while (choice !== 4);
