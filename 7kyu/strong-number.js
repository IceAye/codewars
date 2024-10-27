function strong(n) {
    let array = Array.from(String(n), Number);

    let factorial = function (x) {
        let sum = 1;

        while (x > 0) {
            sum *= x;
            x--;
        }
        return sum;
    };

    return array.reduce((acc, curr) => acc + factorial(curr), 0) === n
        ? "STRONG!!!!"
        : "Not Strong !!"
}

console.log(strong(1)); // "STRONG!!!!"
console.log(strong(2)); // "STRONG!!!!"
console.log(strong(145)); // "STRONG!!!!"
console.log(strong(7)); // "Not Strong !!"
console.log(strong(93)); // "Not Strong !!"
console.log(strong(185)); // "Not Strong !!"