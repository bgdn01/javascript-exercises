const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let finalString = '';
    for (i = 1; i <= num; i++) {
        finalString += string;
    }
    return finalString;

};

// Do not edit below this line
module.exports = repeatString;
