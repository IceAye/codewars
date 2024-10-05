function generateShape(integer){
    let string = "+".repeat(integer);
    let shape = string;
    while (shape.length < integer**2) shape += "\n" + string;
    return shape;
}

console.log(generateShape(1));
console.log(generateShape(3));
console.log(generateShape(4));
console.log(generateShape(5));