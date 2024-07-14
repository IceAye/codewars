function count( string ) {
    let counting = {}
    let array = string.split('')
    for (let i = 0; i < array.length; i++) {
        if (!Object.hasOwn(counting , array[i])) {
            counting[array[i]] = 1
        } else {
            counting[array[i]] += 1
        }
    }
    return counting
}

console.log(count('abacac'))