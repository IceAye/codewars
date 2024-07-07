function usdcny( usd ) {
    return String((usd * 6.75).toFixed(2)) + " Chinese Yuan"
}

console.log('Output: ' , usdcny(15))
console.log('Output: ' , usdcny(465))