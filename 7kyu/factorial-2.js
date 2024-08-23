// ❓ DESCRIPTION:
// Your task is to write function factorial.
//
// ✅ SOLUTION:
function factorial(n) {
    let sum = 1;

    while (n > 0) {
        sum *= n;
        n--;
    }
    return sum;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
