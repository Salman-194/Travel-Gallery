let clickBtn = document.getElementById("clickBtn");
let message = document.getElementById("message");

clickBtn.addEventListener("click", function () {
    message.textContent = "Button clicked successfully!";
});
let nameInput = document.getElementById("nameInput");
let inputMessage = document.getElementById("inputMessage");

nameInput.addEventListener("input", function (event) {
    inputMessage.textContent = "Hello, " + event.target.value;
});
let keyMessage = document.getElementById("keyMessage");

document.addEventListener("keydown", function (event) {
    keyMessage.textContent = "You pressed: " + event.key;
});
let citySelect = document.getElementById("citySelect");
let cityMessage = document.getElementById("cityMessage");

citySelect.addEventListener("change", function (event) {
    cityMessage.textContent = "Selected City: " + event.target.value;
});

let parentBox = document.getElementById("parentBox");
let childBtn = document.getElementById("childBtn");

parentBox.addEventListener("click", function () {
    console.log("Parent Box Clicked");
});

childBtn.addEventListener("click", function () {
    console.log("Child Button Clicked");
});
parentBox.addEventListener("click", function (event) {
    if (event.target.id === "childBtn") {
        console.log("Event Delegation: Child Button Detected!");
    }
});
let registerForm = document.getElementById("registerForm");
let regName = document.getElementById("regName");
let regEmail = document.getElementById("regEmail");
let regPhone = document.getElementById("regPhone");
let regPassword = document.getElementById("regPassword");

let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = "";

    if (regName.value === "" || regEmail.value === "" ||
        regPhone.value === "" || regPassword.value === "") {
        errorMessage.textContent = "Please fill all fields!";
        return;
    }

    if (regPhone.value.length !== 10) {
        errorMessage.textContent = "Phone number must be 10 digits!";
        return;
    }

    if (regPassword.value.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    successMessage.textContent = "Registration Successful!";
});
let storageInput = document.getElementById("storageInput");
let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");
let deleteBtn = document.getElementById("deleteBtn");
let storageMessage = document.getElementById("storageMessage");

saveBtn.addEventListener("click", function () {
    localStorage.setItem("myData", storageInput.value);
    storageMessage.textContent = "Data Saved Successfully!";
});

loadBtn.addEventListener("click", function () {
    let savedData = localStorage.getItem("myData");
    storageMessage.textContent = savedData || "No Data Found!";
});

deleteBtn.addEventListener("click", function () {
    localStorage.removeItem("myData");
    storageMessage.textContent = "Data Deleted Successfully!";
});
let passwordStrength = document.getElementById("passwordStrength");

regPassword.addEventListener("input", function () {
    let password = regPassword.value;

    if (password.length === 0) {
        passwordStrength.textContent = "";
    } else if (password.length < 6) {
        passwordStrength.textContent = "Weak Password";
    } else if (password.length < 10) {
        passwordStrength.textContent = "Medium Password";
    } else {
        passwordStrength.textContent = "Strong Password";
    }
});
let nameError = document.getElementById("nameError");

regName.addEventListener("input", function () {
    let name = regName.value.trim();

    if (name.length === 0) {
        nameError.textContent = "";
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters!";
    } else {
        nameError.textContent = "";
    }
});
let emailError = document.getElementById("emailError");

regEmail.addEventListener("input", function () {
    let email = regEmail.value.trim();

    if (email.length === 0) {
        emailError.textContent = "";
    } else if (!regEmail.validity.valid) {
        emailError.textContent = "Please enter a valid email!";
    } else {
        emailError.textContent = "";
    }
});
let phoneError = document.getElementById("phoneError");

regPhone.addEventListener("input", function () {
    let phone = regPhone.value.trim();

    if (phone.length === 0) {
        phoneError.textContent = "";
    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number!";
    } else {
        phoneError.textContent = "";
    }
});