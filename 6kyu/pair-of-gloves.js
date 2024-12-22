// ❓ DESCRIPTION:
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair
// of gloves you can constitute from the gloves you have in your drawer.  Given an array describing the color of each
// glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
//
// ✅ SOLUTION:
function numberOfPairs(gloves) {
    let hashmap = new Map();
    for (const glove of gloves) {
        hashmap.set(glove , hashmap.get(glove) + 1 || 1);
    }
    return [...hashmap.values()].map(pair => Math.floor(pair / 2)).reduce((acc , curr) => acc + curr , 0);
}

// 📌 TESTCASE:
console.log(numberOfPairs(["red" , "red"])); // 1
console.log(numberOfPairs(["red" , "green" , "blue"])); // 0
console.log(numberOfPairs(["gray" , "black" , "purple" , "purple" , "gray" , "black"])); // 3