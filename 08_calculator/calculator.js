const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo
};

const sum = function(arr) {
	const totalArr = arr.reduce((total, num) => total + num , 0);
  return totalArr;
};

const multiply = function(arr) {
  const totalArr = arr.reduce((total, num) => total * num);
  return totalArr;
};

const power = function(numberOne, numberTwo) {
	return Math.pow(numberOne, numberTwo);
};

const factorial = function(number) {
  if (number === 0 || number === 1){
    return 1;
  }
  for (i = number - 1; i >= 1; i--){
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
