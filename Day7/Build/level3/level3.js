// Exercise 1: Number Guessing Game

let secretNumber = 7;
let attempts = 0;
let maxAttempts = 5;
let guessedCorrectly = false;

while (attempts < maxAttempts) {
    let guess = Number(prompt("Guess a number between 1 and 10:"));
    attempts++;

    if (guess === secretNumber) {
        console.log("Correct! You guessed the number.");
        guessedCorrectly = true;
        break;
    } else if (guess > secretNumber) {
        console.log("Too High!");
    } else {
        console.log("Too Low!");
    }

    console.log("Attempts used:", attempts);
}

if (!guessedCorrectly) {
    console.log("Game Over! The number was:", secretNumber);
}

console.log("Total attempts:", attempts);
// Exercise 2: Armstrong Numbers from 1 to 1000

console.log("Armstrong Numbers from 1 to 1000:");

for (let number = 1; number <= 1000; number++) {
    let originalNumber = number;
    let tempNumber = number;
    let sumOfCubes = 0;

    while (tempNumber > 0) {
        let digit = tempNumber % 10;
        sumOfCubes += digit * digit * digit;
        tempNumber = Math.floor(tempNumber / 10);
    }

    if (sumOfCubes === originalNumber) {
        console.log(originalNumber);
    }
}
// Exercise 3: Seconds to HH:MM:SS

let totalSeconds = 3665;

let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

let formattedTime =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

console.log("Time:", formattedTime);
