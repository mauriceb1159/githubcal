function add(a, b) {
  const unusedResult = a + b;

  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  console.log(calculationLabel);

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
