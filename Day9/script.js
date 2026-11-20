let message = document.getElementById("message");
let button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
    message.textContent = "Text changed successfully!";
});
let heading = document.querySelector("h1");

console.log(heading.textContent);
let allElements = document.querySelectorAll("p");

console.log(allElements.length);
let messageBox = document.getElementById("message");

messageBox.innerHTML = "<strong>Welcome Salman!</strong>";
let headingElement = document.querySelector("h1");

headingElement.setAttribute("title", "DOM Practice Heading");
let paragraph = document.getElementById("message");

paragraph.classList.add("highlight");
paragraph.classList.remove("highlight");
paragraph.classList.toggle("highlight");
let newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created using JavaScript!";

document.body.append(newParagraph);
newParagraph.remove();
let buttonParent = document.getElementById("changeBtn").parentElement;

console.log(buttonParent);
let bodyChildren = document.body.children;

console.log(bodyChildren);
console.log(bodyChildren.length);
let closestBody = document.getElementById("changeBtn").closest("body");

console.log(closestBody);
let gallery = document.getElementById("gallery");
let addCardBtn = document.getElementById("addCardBtn");

let cardCount = 0;

addCardBtn.addEventListener("click", function () {
    cardCount++;

    let card = document.createElement("div");

    card.textContent = "Gallery Card " + cardCount;

    card.style.border = "1px solid black";
    card.style.padding = "15px";
    card.style.margin = "10px";
    card.style.width = "150px";

    gallery.append(card);
});
let count = 0;

let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});