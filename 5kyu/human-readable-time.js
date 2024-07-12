// ❓ DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// ✅ SOLUTION:
function humanReadable (seconds) {
    let minutes = Math.floor(seconds / 60) % 60
    let hours = Math.floor(seconds / 3600)
    let sec = seconds % 60

    let startZero = function ( value ) {
        return value < 10 ? "0" + value : value
    }

    return `${startZero(hours)}:${startZero(minutes)}:${startZero(sec)}`
}

console.log('Output: ' , humanReadable(0))
console.log('Output: ' , humanReadable(59))
console.log('Output: ' , humanReadable(90))
console.log('Output: ' , humanReadable(3599))
console.log('Output: ' , humanReadable(3600))
console.log('Output: ' , humanReadable(45296))