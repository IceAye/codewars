const abc = '0abcdefghijklmnopqrstuvwxyz'
function high( x ) {
    let words = x.split(' ')
    let chars = []
    for (let i = 0; i < words.length; i++) {
        chars.push(words[i].split('').reduce((sum, current) => sum + abc.indexOf(current), 0))
    }
    return words[chars.indexOf(Math.max(...chars))]
}

console.log('Output: ' , high('man i need a taxi up to ubud'))
console.log('Output: ' , high('what time are we climbing up the volcano'))