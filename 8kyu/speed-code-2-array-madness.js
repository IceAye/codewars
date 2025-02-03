function arrayMadness(a, b) {
    let squart = a.map(item => Math.pow(item, 2)).reduce((sum, current) => sum + current)
    let qubes = b.map(item => Math.pow(item, 3)).reduce((sum, current) => sum + current)
    return squart > qubes
}