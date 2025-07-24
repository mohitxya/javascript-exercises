const repeatString = function(string,num) {
    if (num < 0) return 'ERROR';
    if (typeof string !== 'string' || typeof num !== 'number') return 'ERROR';
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
