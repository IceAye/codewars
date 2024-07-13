function shortenToDate(longDate) {
    return longDate.split(',')[0]
}

console.log('Output: ' , shortenToDate("Friday May 2, 9am"))
console.log('Output: ' , shortenToDate("Tuesday January 29, 10pm"))