// ❓ DESCRIPTION:
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
//
// ✅ SOLUTION:
function logicalCalc(array, op){
    if (op === "AND") return array.reduce((acc, current) => acc && current);
    if (op === "OR") return array.reduce((acc, current) => acc || current);
    if (op === "XOR") return array.reduce((acc, current) => acc != current);
}

console.log(logicalCalc([true, true, true, false], "AND"))
console.log(logicalCalc([true, true, true, false], "OR"))
console.log(logicalCalc([true, true, true, false], "XOR"))
console.log(logicalCalc([true, true, false, false], "AND"))
console.log(logicalCalc([true, true, false, false], "OR"))
console.log(logicalCalc([true, true, false, false], "XOR"))
console.log(logicalCalc([true, false, false, false], "AND"))
console.log(logicalCalc([true, false, false, false], "AND"))
console.log(logicalCalc([true, false, false, false], "XOR"))
console.log(logicalCalc([true, true], "AND"))

