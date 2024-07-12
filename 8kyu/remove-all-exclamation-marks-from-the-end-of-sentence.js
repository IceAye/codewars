function remove (string) {
    return string.replace(/!+$/, '')
}

console.log('Output: ' , remove ("Hi!"))
console.log('Output: ' , remove ("Hi!!!"))
console.log('Output: ' , remove ("!Hi!"))
console.log('Output: ' , remove ("!Hi"))