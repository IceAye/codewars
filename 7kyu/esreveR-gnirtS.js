// ❓ DESCRIPTION:
// Create a function called reverse for the String prototype that will allow the following functionality:
// "String".reverse();// => returns "gnirtS"
// "Super awesome string".reverse();// => returns "gnirts emosewa repuS"
//
// ✅ SOLUTION 1:
String.prototype.reverse = function ()  {
    return [...this].reduceRight((acc, curr) => acc + curr, '');
}

// ✅ SOLUTION 2:
String.prototype.reverse = function ()  {
    return [...this].reverse().join('');
}

// 📌 TESTCASE:
console.log("String".reverse(), "gnirtS");
console.log("Another string".reverse(), "gnirts rehtonA");