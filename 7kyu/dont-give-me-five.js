function dontGiveMeFive(start, end){
    let result = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) { result += 1}
    }
    return result
}