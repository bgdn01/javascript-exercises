const add = function (numA, numB) {
  return Number(numA) + Number(numB);
};

const subtract = function (numA, numB) {
  return Number(numA) - Number(numB);
};

const sum = function (arr) {
  let result = 0;
  for (let element of arr) {
    result += element;
  }
  return result;
};

const multiply = function (arr) {
  let result = 1;
  for (let element of arr) {
    result *= element;
  }
  return result;
};

const power = function (numA, numB) {
  return numA ** numB;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
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
