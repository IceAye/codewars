function oddOrEven(array) {
    let arraySum = array.reduce((total, current) => total + current, 0)
    return arraySum % 2 === 0 ? 'even' : 'odd'
}