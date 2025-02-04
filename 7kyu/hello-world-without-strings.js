// ❓ DESCRIPTION:
// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.
//
// ✅ SOLUTION 1:
const helloWorld = () => {
    let result = String();
    [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33].map((item) => result += String.fromCharCode(item));
    return result;
};

// ✅ SOLUTION 2:
const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);

// 📌 TESTCASE:
console.log(helloWorld()); // "Hello, World!"