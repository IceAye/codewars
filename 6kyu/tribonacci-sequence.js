function tribonacci(signature,n){
    let array = [...signature]
    for (let i = 0; i < n - 3; i++) {
        let nextNumber = array[i] + array[i + 1] + array[i + 2]
        array.push(nextNumber)
    }
    return array.slice(0, n)
}

console.log(tribonacci([1,1,1], 10))
console.log(tribonacci([0,0,1], 10))
console.log(tribonacci([0,1,1], 10))