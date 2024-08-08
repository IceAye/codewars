function problem(x){
    return typeof x == 'number' ? x * 50 + 6 : 'Error'
}

console.log(problem(1))
console.log(problem(5))
console.log(problem(0))