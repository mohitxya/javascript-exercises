const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let s=0;
	for(let i of arr)
  {
    s+=i;
  }
  return s;
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};


const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let res=1;
  for(let i=1;i<=n;i++)
  {
    res*=i;
  }
  return res;
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
