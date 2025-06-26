function distinctDigitYear(year) {
    for (let i = year + 1; ; i++) {
        if (new Set([...i.toString()]).size === 4) return i;
    }
}

console.log(distinctDigitYear(1987),2013)
console.log(distinctDigitYear(2013),2014)