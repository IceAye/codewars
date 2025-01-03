// ❓ DESCRIPTION:
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't
// find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will
// break the test cases.
//
// ✅ SOLUTION 1:
function covfefe(str) {
    let newString = str.replace(/coverage/g , "covfefe");
    return /coverage/g.test(str) ? newString : str + " covfefe";
}

// ✅ SOLUTION 2:
function covfefe(str) {
    if (str.includes("coverage")) {
        return str.replaceAll("coverage" , "covfefe");
    }
    return str + " covfefe"
}

// 📌 TESTCASE:
console.log(covfefe("coverage")); // "covfefe"
console.log(covfefe("coverage coverage")); // "covfefe covfefe"
console.log(covfefe("nothing")); // "nothing covfefe"
console.log(covfefe("double space ")); // "double space  covfefe"
console.log(covfefe("covfefe")); // "covfefe covfefe"
console.log(covfefe("erag")); // "erag covfefe"