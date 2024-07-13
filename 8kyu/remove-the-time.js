function shortenToDate(longDate) {
    return longDate.split(' ').slice(0,3).join(' ').slice(0, -1)
}

console.log('Output: ' , shortenToDate("Friday May 2, 9am"))
console.log('Output: ' , shortenToDate("Tuesday January 29, 10pm"))