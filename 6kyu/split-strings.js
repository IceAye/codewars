function solution( str ) {
    if (str === '') {
        return []
    }
    if (str.length % 2 !== 0) {
        str += '_'
    }
    return str.match(/.{1,2}/gi)
}

console.log(solution("abcdef"))
console.log(solution("abcdefg"))