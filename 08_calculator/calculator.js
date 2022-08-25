const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
	let total = numbers.reduce(function(prev,curr) {
    return curr + prev;
  }, 0)
  return total;
};

const multiply = function(num) {
let newTotal = num.reduce(function(a, b) {
  return a * b;
})
  return newTotal;
};

const power = function(a, b) {
	    return a ** b;
  };


const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1; }
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
