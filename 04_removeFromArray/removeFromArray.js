// const removeFromArray = function (array, excluded) {
//     for (element of array) {
//         if (element === excluded) {
//             array.splice(array.indexOf(excluded), 1);
//         }
//     }
//     return array;
// };
/*wtf
const removeFromArray = function (array, ...arguments) {
    let newArray = [];
    for (element of arguments) {
        newArray = array.filter((item) => item !== element);

    }
    return newArray;
};
*/


const removeFromArray = function (array, ...arguments) {
    let exclude = arguments;
    array = array.filter((element) => !exclude.includes(element));
    return array;
};
/*
const removeFromArray = function (array, ...arguments) {
    for (element of array) {
        if (arguments.includes(element)) {
            array.splice(array.indexOf(element), 1);
        }
    }
    return array;
};
*/

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3, 4], 3));
// [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// [1, 4]
console.log(removeFromArray([1, 2, 2, 3], 2));
// [1, 3]
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
// [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
// [1, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
// []
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
// [2, "ho"]
console.log(removeFromArray([1, 2, 3], "1", 3));
// [1, 2]