function alphabetic(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charCodeAt(i) > s.charCodeAt(i + 1)) return false;
    }
    return true;
}

function alphabetic(s) {
    return s === s.split("").sort().join("");
}

console.log(alphabetic("asd")) // false
console.log(alphabetic("codewars")) // false
console.log(alphabetic("door")) // true
console.log(alphabetic("cell")) // true
console.log(alphabetic("z")) // true
console.log(alphabetic("")) // true