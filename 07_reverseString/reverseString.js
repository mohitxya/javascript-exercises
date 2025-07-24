const reverseString = function(string) {
    let out=string.split('');
    let final='';
    let n=out.length;
    for(let i=n-1;i>=0;i--)
    {
        final+=out[i];
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
