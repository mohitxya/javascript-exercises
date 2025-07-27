const palindromes = function (str) {
    //remove any non alpha character
    const cleaned = str.replace(/[^a-zA-Z]/g, '');
    const reversed = str.split('').reverse().join('');

    //reverse it and compare
    if(cleaned==reversed) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
