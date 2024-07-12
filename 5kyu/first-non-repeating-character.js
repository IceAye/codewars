function firstNonRepeatingLetter( s ) {
    let array = s.toLowerCase().split('')
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            return s[i]
        }
    }
    return ''
}

console.log('Output: ' , firstNonRepeatingLetter('sTress'))
console.log('Output: ' , firstNonRepeatingLetter('moonmen'))
