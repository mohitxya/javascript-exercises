const fibonacci = function(n) {
    let arr = [0, 1];
    
    if (n === 0) return arr[0];
    else if(n<0) return "OOPS";
    else if (n === 1) return arr[1];
    else {
        for (let i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[n];
    }
};


// Do not edit below this line
module.exports = fibonacci;
