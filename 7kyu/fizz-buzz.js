// ❓ DESCRIPTION:
// Return an array containing the numbers from 1 to N, where N is the parametered value.
//
// Replace certain values however if any of the following conditions are met:
//
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
//
// ✅ SOLUTION:
function fizzbuzz(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        let value = "";
        if (i % 3 === 0) value += "Fizz";
        if (i % 5 === 0) value += "Buzz";
        array.push(value || i);
    }
    return array;
}

console.log(fizzbuzz(15));
