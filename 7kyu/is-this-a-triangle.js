function isTriangle( a , b , c ) {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1,2,2))
console.log(isTriangle(1,2,3))
console.log(isTriangle(0,2,3))