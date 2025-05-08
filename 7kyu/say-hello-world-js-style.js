// ❓ DESCRIPTION:
// Write the definition of the function "say" such that calling this:
//
// say("Hello")("World")
// returns "Hello World"
//
// ✅ SOLUTION 1:
const say = function(string1) {
    return (string2) => string1 + " " + string2;
}

// ✅ SOLUTION 2:
const say = string1 => string2 => `${string1} ${string2}`;

// 📌 TESTCASE:
console.log(say('Hello')('World'), 'Hello World');