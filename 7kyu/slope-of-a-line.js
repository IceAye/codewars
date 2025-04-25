function getSlope(p1, p2) {
    if (p1[0] === p2[0]) return null;
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

console.log(getSlope([1,1],[2,2])) // 1
console.log(getSlope([-5,-5],[9,9])) // 1
console.log(getSlope([1,8],[2,9])) // 1
console.log(getSlope([8,3],[-4,5])) // -1/6
console.log(getSlope([5,3],[8,9])) // 2
console.log(getSlope([1,3],[0,3])) // 0
console.log(getSlope([11,1],[1,11])) // -1
console.log(getSlope([1,1],[1,2])) // null
console.log(getSlope([-5,9],[-5,12])) // null
console.log(getSlope([1,1],[1,1])) // null
console.log(getSlope([-5,9],[-5,9])) // null