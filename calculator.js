/*
function add(a, b) {
  return a + b;
}
*/

// quality error made purposely
function add(a, b) {
  let result = a + b;

  const unused = 100; // variable defined but not used. This will fail the linting process.

  return result;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
