const removeFromArray = function(arr,...key) {
    return arr.filter((num)=>!key.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
