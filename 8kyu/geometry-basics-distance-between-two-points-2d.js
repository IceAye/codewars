function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

console.log(distanceBetweenPoints({ x: 3, y: 3 }, { x: 3, y: 3 }));
console.log(distanceBetweenPoints({ x: 1, y: 6 }, { x: 4, y: 2 }));