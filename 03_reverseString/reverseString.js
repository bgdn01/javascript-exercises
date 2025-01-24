// const reverseString = function (string) {
//     let baseString = '' + string;
//     let array = baseString.split('');
//     let output = '';
//     while (array.length > 0) {
//         output += array.pop();
//     }
//     return output;
// };


// 2nd version:
const reverseString = function (string) {
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
