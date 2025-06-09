// ❓ DESCRIPTION:
// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.
//
// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.
//
// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.
//
// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).
//
// ✅ SOLUTION:
function isolateIt(arr){
    return arr.map(item => item.slice(0, item.length / 2) + '|' + item.slice(-item.length / 2));
}

// 📌 TESTCASE:
console.log(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
console.log(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
console.log(isolateIt(["1234","56789"]) , ["12|34","56|89"]);