// ❓ DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//
// ✅ SOLUTION:
function generateShape(integer){
    let string = "+".repeat(integer);
    let shape = string;
    while (shape.length < integer**2) shape += "\n" + string;
    return shape;
}

// 📌 TESTCASE:
console.log(generateShape(1));
console.log(generateShape(3));
console.log(generateShape(4));
console.log(generateShape(5));