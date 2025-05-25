// ❓ DESCRIPTION:
// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.
//
// Note: This min function need not handle more than two arguments.
//
// function min(a, b){
//   return (a<b)?a:b;
// }
//
// ✅ SOLUTION:
function min(...args) {
    return args.includes(NaN) || args.includes(undefined) ? NaN : args.reduce((acc, curr) => acc <= curr ? acc : curr) || 0
}

// 📌 TESTCASE:
console.log(min(1, -2.5)) // === -2.5, 'Return the minimum of the two arguments');
console.log(min(1.5, NaN)) //, 'Any NaN value should return NaN');
console.log(min(1.5, undefined)) //, 'Any undefined value should return NaN');
console.log(min(-Infinity, Infinity)) // === -Infinity, 'Infinity should be handled like normal numbers');
console.log(min(null, 2.5)) // === 0, 'treat null as if it were 0');