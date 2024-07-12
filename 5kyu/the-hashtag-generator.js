// ❓ DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
//
// ✅ SOLUTION:
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