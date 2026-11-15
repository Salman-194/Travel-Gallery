// Testing - Challenge 1
{
  const cart = [];

  function addToCart(name, price, quantity) {
    cart.push({ name, price, quantity });
  }

  function removeFromCart(name) {
    const index = cart.findIndex((item) => item.name === name);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }

  function updateQuantity(name, newQuantity) {
    const product = cart.find((item) => item.name === name);
    if (product) {
      product.quantity = newQuantity;
    }
  }

  function calculateTotal() {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  addToCart("Laptop", 45000, 1);
  addToCart("Mouse", 500, 2);
  addToCart("Keyboard", 1500, 1);

  const addTest = cart.length === 3;

  removeFromCart("Mouse");
  const removeTest = cart.length === 2 &&
    !cart.some((item) => item.name === "Mouse");

  updateQuantity("Laptop", 2);
  const quantityTest = cart.find((item) => item.name === "Laptop").quantity === 2;

  const totalTest = calculateTotal() === 91500;

  const cartJSON = JSON.stringify(cart);
  const jsonTest = JSON.parse(cartJSON).length === 2;

  console.log("Add Product:", addTest ? "PASS" : "FAIL");
  console.log("Remove Product:", removeTest ? "PASS" : "FAIL");
  console.log("Update Quantity:", quantityTest ? "PASS" : "FAIL");
  console.log("Calculate Total:", totalTest ? "PASS" : "FAIL");
  console.log("JSON Conversion:", jsonTest ? "PASS" : "FAIL");
}
// Testing - Challenge 2
{
  const contacts = [];

  function addContact(name, phone) {
    contacts.push({ name, phone });
  }

  function searchContact(name) {
    return contacts.find((contact) =>
      contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  function filterContacts(letter) {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().startsWith(letter.toLowerCase())
    );
  }

  function sortContacts() {
    return [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  function deleteContact(index) {
    if (index >= 0 && index < contacts.length) {
      contacts.splice(index, 1);
    }
  }

  addContact("Arun", "9876543210");
  addContact("Bala", "9876543211");
  addContact("Charan", "9876543212");
  addContact("Deepa", "9876543213");

  const addTest = contacts.length === 4;
  const searchTest = searchContact("Bala")?.phone === "9876543211";
  const filterTest = filterContacts("A").length === 1;
  const sortTest = sortContacts()[0].name === "Arun";

  deleteContact(1);
  const deleteTest = contacts.length === 3 &&
    !contacts.some((contact) => contact.name === "Bala");

  console.log("Add Contacts:", addTest ? "PASS" : "FAIL");
  console.log("Search Contact:", searchTest ? "PASS" : "FAIL");
  console.log("Filter Contacts:", filterTest ? "PASS" : "FAIL");
  console.log("Sort Contacts:", sortTest ? "PASS" : "FAIL");
  console.log("Delete Contact:", deleteTest ? "PASS" : "FAIL");
}
// Testing - Challenge 3
{
  const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

  const flattenedArray = nestedArray.flat(Infinity);

  const expected = [1, 2, 3, 4, 5, 6, 7];

  console.log("Flattened Array:", flattenedArray);

  console.log(
    "Challenge 3 Test:",
    JSON.stringify(flattenedArray) === JSON.stringify(expected)
      ? "PASS"
      : "FAIL"
  );
}