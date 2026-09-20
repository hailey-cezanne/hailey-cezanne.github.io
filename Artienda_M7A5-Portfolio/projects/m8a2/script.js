// Module 8, Activity 2 - The order counter

// Find the three elements
const addButton = document.querySelector("#add");
const resetButton = document.querySelector("#reset");
const countDisplay = document.querySelector("#count");

// Keep the running total
let total = 0;

// Add one when the Add button is clicked
addButton.addEventListener("click", function () {
  total = total + 1;
  countDisplay.textContent = total;
});

// Reset the total when the Reset button is clicked
resetButton.addEventListener("click", function () {
  total = 0;
  countDisplay.textContent = total;
});