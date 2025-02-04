const convertToCelsius = function (tempF) {
  let temp = ((tempF - 32) * (5 / 9)).toFixed(1);
  temp = temp.endsWith('.0') ? temp.slice(0, temp.length - 2) : temp;
  return Number(temp);
};

const convertToFahrenheit = function (tempC) {
  let temp = (tempC * (9 / 5) + 32).toFixed(1);
  temp = temp.endsWith('.0') ? temp.slice(0, temp.length - 2) : temp;
  return Number(temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
