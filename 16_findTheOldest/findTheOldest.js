const findTheOldest = function(arr) {
    let max = 0;
    let o = {};

    const currentYear = new Date().getFullYear(); // ✅ Use actual current year

    for (let obj of arr) {
        let temp = 0;

        if (obj.yearOfDeath !== undefined) {
            temp = obj.yearOfDeath - obj.yearOfBirth;
        } else {
            temp = currentYear - obj.yearOfBirth; // ✅ Not hardcoded
        }

        if (temp > max) {
            max = temp;
            o = obj;
        }
    }

    return o;
};

// Do not edit below this line
module.exports = findTheOldest;
