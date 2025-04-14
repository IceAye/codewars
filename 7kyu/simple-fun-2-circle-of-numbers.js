function circleOfNumbers(n, firstNumber) {
    let center = n / 2;
    let opposite = firstNumber + center;
    return opposite >= n ? opposite - n : opposite;
}

console.log(circleOfNumbers(10,2) , 7)
console.log(circleOfNumbers(10,7) , 2)
console.log(circleOfNumbers(4,1) , 3)
console.log(circleOfNumbers(6,3) , 0)
