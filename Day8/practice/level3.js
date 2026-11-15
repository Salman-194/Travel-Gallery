// Challenge 1 - Shopping Cart

const cart = [];

function addToCart(name, price, quantity) {
  cart.push({
    name: name,
    price: price,
    quantity: quantity
  });
}

addToCart("Laptop", 45000, 1);
addToCart("Mouse", 500, 2);
addToCart("Keyboard", 1500, 1);

console.log("Shopping Cart:");
console.table(cart);
// Remove Product
function removeFromCart(name) {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    cart.splice(index, 1);
  }
}

removeFromCart("Mouse");

console.log("After Removing Mouse:");
console.table(cart);
// Challenge 2 - Contacts Manager

const contacts = [];

function addContact(name, phone) {
  contacts.push({ name, phone });
}

addContact("Arun", "9876543210");
addContact("Bala", "9876543211");
addContact("Charan", "9876543212");
addContact("Deepa", "9876543213");

console.log("All Contacts:");
console.table(contacts);
// Challenge 1 - Shopping Cart
// Challenge 1 full code...

// Challenge 2 - Contacts Manager
// Challenge 2 full code...

// Challenge 3 - Flatten Nested Array
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

const flattenedArray = nestedArray.flat(Infinity);

console.log("Original Array:", nestedArray);
console.log("Flattened Array:", flattenedArray);
// Search Contact
function searchContact(name) {
  return contacts.find((contact) =>
    contact.name.toLowerCase() === name.toLowerCase()
  );
}

console.log("Search Result:", searchContact("Bala"));
// Filter Contacts
function filterContacts(letter) {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().startsWith(letter.toLowerCase())
  );
}

console.log("Contacts Starting with A:");
console.table(filterContacts("A"));
// Sort Contacts Alphabetically
function sortContacts() {
  return [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

console.log("Sorted Contacts:");
console.table(sortContacts());
// Delete Contact by Index
function deleteContact(index) {
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
  }
}

deleteContact(1);

console.log("After Deleting Contact:");
console.table(contacts);
// Display Final Contacts
function displayContacts() {
  console.log("Final Contact List:");
  console.table(contacts);
  console.log("Total Contacts:", contacts.length);
}

displayContacts();
// Change Product Quantity
function updateQuantity(name, newQuantity) {
  const product = cart.find((item) => item.name === name);

  if (product) {
    product.quantity = newQuantity;
  }
}

updateQuantity("Laptop", 2);

console.log("After Updating Quantity:");
console.table(cart);
// Calculate Cart Total
function calculateTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

console.log("Cart Total: ₹" + calculateTotal());
// Generate Receipt
function generateReceipt() {
  console.log("\n===== SHOPPING RECEIPT =====");

  cart.forEach((item) => {
    console.log(
      `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    );
  });

  console.log("----------------------------");
  console.log("Grand Total: ₹" + calculateTotal());
  console.log("============================");
}

generateReceipt();
// Generate Receipt
function generateReceipt() {
  console.log("\n===== SHOPPING RECEIPT =====");

  cart.forEach((item) => {
    console.log(
      `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    );
  });

  console.log("----------------------------");
  console.log("Grand Total: ₹" + calculateTotal());
  console.log("============================");
}

generateReceipt();
// Convert Cart to JSON
const cartJSON = JSON.stringify(cart, null, 2);

console.log("\nCart JSON:");
console.log(cartJSON);
