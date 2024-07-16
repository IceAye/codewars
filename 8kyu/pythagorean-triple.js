// ❓ DESCRIPTION:
// Given an unsorted array of 3 positive integers [ n1, n2, n3 ],
// determine if it is possible to form a Pythagorean Triple using those 3 integers.
//
// ✅ SOLUTION:
function isPythagoreanTriple(integers) {
    const sorted = integers.sort((a, b) => a - b)
    return (sorted[0]**2 + sorted[1]**2) === sorted[2]**2
}

console.log(isPythagoreanTriple([3, 4, 5]))
console.log(isPythagoreanTriple([3, 5, 9]))