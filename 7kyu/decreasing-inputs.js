// ❓ DESCRIPTION:
// This kata is all about adding numbers.
// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?
// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.
// Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.
//
// ✅ SOLUTION:
function add(...args) {
    return Math.round(args.reduce((acc, curr, ind) => acc + curr / (ind + 1), 0));
}

// 📌 TESTCASE:
console.log(add(), 0);
console.log(add(100, 200, 300), 300);
console.log(add(2), 2);
console.log(add(4, -3, -2), 2);
console.log(add(-1, -2, -3, -4), -4);