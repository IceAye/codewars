function sumFactorial(arr){
    let result = 0;
    for (const item of arr) {
        let factorial = 1;
        for (let i = 1; i <= item; i++) {
            factorial *= i;
        }
        result += factorial;
    }
    return result;
}

console.log(sumFactorial([4,6]), 744);
console.log(sumFactorial([5,4,1]), 145);