// ❓ DESCRIPTION:
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.
// Please return the gap between the first position of c and the last position of c.
// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
//
// ✅ SOLUTION:
function firstToLast(str,c){
    return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}

console.log(firstToLast("ababc","a"))
console.log(firstToLast("ababc","c"))
console.log(firstToLast("ababc","d") )
