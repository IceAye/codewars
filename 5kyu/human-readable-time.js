function humanReadable( seconds ) {
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let sec = seconds % 60

    if (minutes > 59) {
        minutes = minutes - hours * 60
    }

    if (sec < 10) {
        sec = "0" + sec
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (hours < 10) {
        hours = "0" + hours
    }

    return `${hours}:${minutes}:${sec}`
}

console.log('Output: ' , humanReadable(0))
console.log('Output: ' , humanReadable(59))
console.log('Output: ' , humanReadable(90))
console.log('Output: ' , humanReadable(3599))
console.log('Output: ' , humanReadable(3600))
console.log('Output: ' , humanReadable(45296))