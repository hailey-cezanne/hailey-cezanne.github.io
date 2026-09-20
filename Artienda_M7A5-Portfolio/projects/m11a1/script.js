'use strict';

// Module 11, Activity 1 - Never show the user NaN

const priceInput = document.querySelector('#price');
const qtyInput = document.querySelector('#qty');
const totalOutput = document.querySelector('#total');
const errorOutput = document.querySelector('#error');

function readNumber(rawValue, fieldName) {
  const value = rawValue.trim();

  if (value === '') {
    throw new Error(`Enter a ${fieldName}.`);
  }

  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`Enter a valid ${fieldName}.`);
  }

  if (number < 0) {
    throw new Error(`${fieldName} cannot be negative.`);
  }

  return number;
}

function calculateTotal() {
  try {
    const price = readNumber(priceInput.value, 'price');
    const quantity = readNumber(qtyInput.value, 'quantity');

    const total = price * quantity;

    totalOutput.textContent = total;
    errorOutput.textContent = '';
  } catch (error) {
    totalOutput.textContent = '--';
    errorOutput.textContent = error.message;

    // The error message above gives feedback without a console error.
  }
}

priceInput.addEventListener('input', calculateTotal);
qtyInput.addEventListener('input', calculateTotal);

calculateTotal();