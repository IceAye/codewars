function narcissistic( value ) {
    let result = 0
    let arr = value.toString().split('')

    for (let i = 0; i < arr.length; i++) {
        result += Math.pow(+arr[i] , arr.length)
    }
    return result === value
}

console.log(narcissistic(153))
console.log(narcissistic(122))