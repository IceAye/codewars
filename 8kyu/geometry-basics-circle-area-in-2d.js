// ❓ DESCRIPTION:
// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
//
// ✅ SOLUTION:
function circleArea(circle){
    return Math.PI * circle.radius**2
}

console.log(circleArea(new Circle(new Point(10, 10), 30)));
console.log(circleArea(new Circle(new Point(25, -70), 30)));
console.log(circleArea(new Circle(new Point(-15, 5), 0)));