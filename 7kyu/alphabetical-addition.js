function addLetters(letters) {
    const abc = "0abcdefghijklmnopqrstuvwxyz";
    let count = letters.reduce((acc, curr) => acc + abc.indexOf(curr), 0)
    while (count > 26)  count -= 26
    return count ? abc.charAt(count) : "z"
}

console.log(addLetters(['a', 'b', 'c'])) // 'f'
console.log(addLetters(['z'])) // 'z'
console.log(addLetters(['a', 'b'])) // 'c'
console.log(addLetters(['c'])) // 'c'
console.log(addLetters(['z', 'a'])) // 'a'
console.log(addLetters(['y', 'c', 'b'])) // 'd'
console.log(addLetters([])) // 'z