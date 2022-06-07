const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let result = 0;
  array.forEach((item) => {
    result += item;
  })
	return result;
};

const multiply = function(array) {
  let result = array.pop();
  array.forEach((item) => {
    result *= item;
  })
	return result;
};

const power = function(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
	return result;
};

const factorial = function(number) {
	let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
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
