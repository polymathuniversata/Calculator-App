let display;

function initializeCalculator(displayElement) {
  display = displayElement || document.createElement('input');
}

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateResult() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    expression = Math.sqrt(eval(expression));
    display.value = expression;
  } catch (error) {
    display.value = 'Error';
  }
}

function enterNumber(number) {
  expression += number;
  display.value = expression;
}

function getDisplayValue() {
  return display.value;
}

module.exports = {
  initializeCalculator,
  appendToDisplay,
  clearDisplay,
  calculateResult,
  calculateSquareRoot,
  enterNumber,
  getDisplayValue,
};

// Initialize calculator with a default display element
initializeCalculator(document.getElementById('display'));
