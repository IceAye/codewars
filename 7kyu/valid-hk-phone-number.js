const isValidHKPhoneNumber = (number) => {
    return /^\d{4}\s\d{4}$/g.test(number)
}

const hasValidHKPhoneNumber = (number) => {
    return /\d{4}\s\d{4}/g.test(number)
}

console.log(isValidHKPhoneNumber("1234 5678")) // true
console.log(isValidHKPhoneNumber("3857  4756")) // false
console.log(isValidHKPhoneNumber("sklfjsdklfjsf")) // false
console.log(isValidHKPhoneNumber("     1234 5678   ")) // false

console.log(hasValidHKPhoneNumber("Hello, my phone number is 1234 5678")) // true
console.log(hasValidHKPhoneNumber("I wonder if 2359 1478 is a valid phone number?")) // true
console.log(hasValidHKPhoneNumber("85748475 is definitely invalid")) // false
console.log(hasValidHKPhoneNumber("'3857  4756' is so close to a valid phone number!")) // false
console.log(hasValidHKPhoneNumber("sklfjsdklfjsf")) // false
console.log(hasValidHKPhoneNumber("     1234 5678   ")) // true