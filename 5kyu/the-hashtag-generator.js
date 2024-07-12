function generateHashtag( str ) {
    let array = str.split(' ')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '') {
        } else {
            array[i] = String(array[i].at(0)).toUpperCase() + array[i].slice(1)
        }
    }
    let result = "#" + array.join('')
    return (result.length === 1 || result.length > 140) ? false : result
}
console.log('Output: ' , generateHashtag (""))
console.log('Output: ' , generateHashtag ("Do We have A Hashtag"))
console.log('Output: ' , generateHashtag (" ".repeat(200)))
console.log('Output: ' , generateHashtag ("Codewars"))
console.log('Output: ' , generateHashtag ("code" + " ".repeat(140) + "wars"))