// ❓ DESCRIPTION:
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b
//
// ✅ SOLUTION 1:

function shorterReverseLonger(a, b) {
    let result = "";
    let min = Math.min(a.length, b.length);
    if (min === b.length) {
        result += b + [...a].reverse().join("") + b;
    } else {
        result += a + [...b].reverse().join("") + a;
    }
    return result;
}

// ✅ SOLUTION 2:
function shorterReverseLonger(a,b) {
    let long = a.length >= b.length ? a : b;
    let short = a.length >= b.length ? b : a;
    return short + [...long].reverse().join("") + short;
}

// 📌 TESTCASE:
console.log(shorterReverseLonger("first", "abcde")) // "abcdetsrifabcde"
console.log(shorterReverseLonger("hello", "bau"  )) // "bauollehbau"
console.log(shorterReverseLonger("fghi",  "abcde")) // "fghiedcbafghi"