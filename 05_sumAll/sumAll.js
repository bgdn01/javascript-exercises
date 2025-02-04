const sumAll = function sumAll(num1, num2) {

    let start = num1;
    let end = num2;
    if (num1 > num2) {
        start = num2;
        end = num1;
    }
    if (num1 < 0 ||
        num2 < 0 ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 % 1 !== 0 ||
        num2 % 1 !== 0) return 'ERROR';

    let result = 0;
    for (i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

// Do not edit below this line
module.exports = sumAll;
