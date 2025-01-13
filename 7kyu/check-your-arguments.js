// ❓ DESCRIPTION:
// Bob has written a function to detect the type of an object. It receives any primitive values or objects, and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?
//
// ✅ SOLUTION:
function objectType(...obj) {
    return Object.prototype.toString.call(obj.length ? obj[0] : null);
}

// 📌 TESTCASE:
console.log(objectType(42)) // '[object Number]'
console.log(objectType(undefined)) //'[object Undefined]'
console.log(objectType()) //'[object Null]'