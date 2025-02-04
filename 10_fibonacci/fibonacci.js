const fibonacci = function (num) {
    let numFib = Number(num);
    if (numFib < 0) return 'OOPS';

    let fibonacciArray = [0, 1];
    for (let i = 2; i <= numFib; i++) {
        let newItem = (fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        fibonacciArray.push(newItem);
    }
    return fibonacciArray[numFib];
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(6));