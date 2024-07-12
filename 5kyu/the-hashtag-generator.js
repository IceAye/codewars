function generateHashtag (str) {
    if (!str.trim()) return false

    let result = "#" +
        str.split(' ')
            .map(item => item.charAt(0).toUpperCase() + item.slice(1))
            .join('')
    return result.length > 140 ? false : result
}

console.log('Output: ' , generateHashtag (""))
console.log('Output: ' , generateHashtag ("Do We have A Hashtag"))
console.log('Output: ' , generateHashtag (" ".repeat(200)))
console.log('Output: ' , generateHashtag ("Codewars"))
console.log('Output: ' , generateHashtag ("code" + " ".repeat(140) + "wars"))