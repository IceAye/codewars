function lateRide(n) {
    let time = Math.floor(n / 60) + (n % 60).toString();
    return [...time].reduce((acc, curr) => acc + +curr, 0);
}

console.log(lateRide(240) , 4)
console.log(lateRide(808) , 14)
console.log(lateRide(1439) , 19)
console.log(lateRide(0) , 0)
console.log(lateRide(23) , 5)
console.log(lateRide(8) , 8)