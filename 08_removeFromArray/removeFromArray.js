const removeFromArray = function(arr,...key) {
    return arr.filter((num)=>!key.includes(num));
    // if num is in keys then don't include it.
};

// Do not edit below this line
module.exports = removeFromArray;
