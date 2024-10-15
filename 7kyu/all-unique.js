function hasUniqueChars(str){
    return new Set(str).size === str.length
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("aA"));