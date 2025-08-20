// ❓ DESCRIPTION:
// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

// ✅ SOLUTION:
function area(d,l){
    const w = Math.sqrt(d**2 - l**2);
    const square = (w * l).toFixed(2);
    return d <= w || d <= l ? 'Not a rectangle' : +square;
}

// 📌 TESTCASE:
console.log(area(5,4),12);
console.log(area(10,6),48);
console.log(area(13,5),60);
console.log(area(12,5),54.54);