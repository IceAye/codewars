// ❓ DESCRIPTION:
// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.
// If your language can handle float binaries assume the array won't contain float or doubles.
//
// ✅ SOLUTION:
function arr2bin(arr) {
    return arr
        .reduce((acc, curr) => (typeof curr === "number" ? acc + curr : acc), 0)
        .toString(2);
}

// 📌 TESTCASE:
console.log(arr2bin([1,2,3,4,5]));
console.log(arr2bin([1,10,100,1000]));
console.log(arr2bin([null]));
console.log(arr2bin([true,true,false,15]));
console.log(arr2bin([{},null,42,42]));