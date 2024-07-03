function validateUsr(username) {
    return /^[a-z0-9_]{4,16}$/.test(username)
}

console.log('Output: ' , validateUsr('asd33sa'))
console.log('Output: ' , validateUsr('a'))
console.log('Output: ' , validateUsr('____'))