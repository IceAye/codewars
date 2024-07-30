let hotpo = function (n) {
    let result = 0;
    let number = n;
    while (number > 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else if (number % 2 !== 0) {
            number = 3 * number + 1;
        }
        result++;
    }
    return result;
};

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));
