function nearestSq(n) {
    let plainDigit = Math.floor(Math.sqrt(n))
    let nextNumber = Math.pow(plainDigit + 1 , 2)
    let prevNumber = Math.pow(plainDigit , 2)

    return Number.isInteger(Math.sqrt(n)) ? n
        : nextNumber - n < n - prevNumber ? nextNumber
            : prevNumber

}

function nearestSq(n) {
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}