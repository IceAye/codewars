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