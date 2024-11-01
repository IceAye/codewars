function alternateCase(s) {
    return s.replace(/\w/g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
}

console.log(alternateCase("abc")) // "ABC"
console.log(alternateCase("ABC")) // "abc"
console.log(alternateCase("Hello World")) // "hELLO wORLD"