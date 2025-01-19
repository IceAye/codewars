// ❓ DESCRIPTION:
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.
// Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
// 0s generated by pairing can NOT be paired again
// ( void where not applicable: ) Don't modify the input array or you may fail to pass the tests
//
// ✅ SOLUTION 1:
function pairZeros(arr) {
    let zeroes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeroes.push(i);
    }
    for (let i = 0; i < zeroes.length; i++) {
        if (i % 2 === 1) {
            arr[zeroes[i]] = "";
        }
    }

    return arr.reduce((acc, curr) => {
        if (curr !== "") acc.push(curr);
        return acc;
    }, []);
}

// ✅ SOLUTION 2:
function pairZeros(arr) {
    let zeroes = 0;
    return arr.filter((number) => number || zeroes++ % 2 === 0);
}

// 📌 TESTCASE:
console.log(pairZeros([1])); // [1]
console.log(pairZeros([0, 0])); // [0]
console.log(pairZeros([0, 0, 0])); // [0,0]
console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])); // [1,0,1,2,0,3,0]