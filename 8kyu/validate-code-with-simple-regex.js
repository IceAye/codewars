function validateCode (code) {
    return /^[123]/.test(code)
}

console.log(validateCode(123))
console.log(validateCode(248))
console.log(validateCode(8))
console.log(validateCode(321))
console.log(validateCode(9453))