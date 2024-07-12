function firstNonRepeatingLetter( s ) {
    let array = s.toLowerCase().split('')
    for (let i = 0; i < array.length; i++) {
        if (!array.slice(i + 1).includes(array[i]) && !array.slice(0 , i).includes(array[i])) {
            return s[i]
        }
    }
    return ''
}