// ❓ DESCRIPTION:
// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(strong(1)); // "STRONG!!!!"
console.log(strong(2)); // "STRONG!!!!"
console.log(strong(145)); // "STRONG!!!!"
console.log(strong(7)); // "Not Strong !!"
console.log(strong(93)); // "Not Strong !!"
console.log(strong(185)); // "Not Strong !!"