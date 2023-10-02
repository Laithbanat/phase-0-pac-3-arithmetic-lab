// Define the basic math functions

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    return a / b;
  }
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Define makeInt function
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // Define preserveDecimal function
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
  