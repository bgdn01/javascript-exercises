const palindromes = function (string) {
    let stringBase = String(string).toLowerCase();

    let exceptions = /[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    stringBase = stringBase.replaceAll(exceptions, '');

    let reverseString = stringBase.split('').reverse().join('');
    return stringBase === reverseString;
};

// Do not edit below this line
module.exports = palindromes;