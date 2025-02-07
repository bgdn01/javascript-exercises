const findTheOldest = function (arr) {

    let age = [];

    for (elem of arr) {
        if (elem.yearOfDeath) age.push(elem.yearOfDeath - elem.yearOfBirth);
        else age.push((new Date().getFullYear()) - elem.yearOfBirth);
    }

    let max = Math.max(...age);
    let indexMax = age.findIndex((element) => element === max);

    return arr[indexMax].name;
};
// Do not edit below this line
module.exports = findTheOldest;

const people1 = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];



const people2 = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const people3 = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

console.log(findTheOldest(people1));
console.log(findTheOldest(people2));
console.log(findTheOldest(people3));