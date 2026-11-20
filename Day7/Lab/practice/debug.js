// Bug 1: Age check

let age = 15;

if (age >= 18) {
    console.log("adult");
}
// Bug 2: Total calculation

let total = 0;

for (let i = 1; i <= 3; i++) {
    total += i;
}

console.log("Total:", total);
// Bug 3: Convert prompt input to number

let userAge = prompt("Your age?");
userAge = Number(userAge);
console.log(userAge + 5);

// Bug 4: Remove extra semicolon

for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// Bug 5: Add decrement to stop infinite loop

let n = 5;

while (n > 0) {
    console.log(n);
    n--;
}
// Bug 6: Add break statement

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
}
// Bug 7: Correct variable name

let firstName = "Asha";

console.log(firstName);
// Bug 8: Correct console spelling

console.log("Hello");