const convertToCelsius = function(num) {
  let ans=(num-32)*(5/9);
  return Math.round(ans * 10) / 10; 
};

const convertToFahrenheit = function(num) {
  let ans=num*(9/5)+32;
  return Math.round(ans * 10) / 10;  // ➜ 3.1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
