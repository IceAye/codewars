function SeriesSum( n ) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += 1 / ((i * 3) - 2)
    }
    return result.toFixed(2).toString()
}