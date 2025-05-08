// ❓ DESCRIPTION:
// This kata is all about adding numbers.
// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
// Remember the function will return 0 if no arguments are passed.
//
// ✅ SOLUTION:
function add(...args) {
    return args.reduce((acc, curr, ind) => acc + curr * (ind + 1), 0);
}

// 📌 TESTCASE:
console.log(add(100,200,300),1400)
console.log(add(), 0);
console.log(add(1,2,3), 14);
console.log(add(1,4,-5,5), 14);