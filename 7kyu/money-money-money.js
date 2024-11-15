function calculateYears(principal, interest, tax, desired) {
    let year = 0
    let i = principal
    while (i < desired) {
        i += i*interest* (1 - tax)
        year++
    }
    return year
}