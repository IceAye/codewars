// ❓ DESCRIPTION:
// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have attributes x and y.
// Write a function calculating distance between Point a and Point b.
//
// ✅ SOLUTION:

function distanceBetweenPoints( a , b ) {
    return Math.sqrt(Math.pow(a.x - b.x , 2) + Math.pow(a.y - b.y , 2));
}

console.log(distanceBetweenPoints({x: 3 , y: 3} , {x: 3 , y: 3}));
console.log(distanceBetweenPoints({x: 1 , y: 6} , {x: 4 , y: 2}));