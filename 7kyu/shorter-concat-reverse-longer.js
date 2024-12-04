function shorterReverseLonger(a, b) {
    let result = "";
    let min = Math.min(a.length, b.length);
    if (min === b.length) {
        result += b + [...a].reverse().join("") + b;
    } else {
        result += a + [...b].reverse().join("") + a;
    }
    return result;
}

function shorterReverseLonger(a,b) {
    let long = a.length >= b.length ? a : b;
    let short = a.length >= b.length ? b : a;
    return short + [...long].reverse().join("") + short;
}

console.log(shorterReverseLonger("first", "abcde")) // "abcdetsrifabcde"
console.log(shorterReverseLonger("hello", "bau"  )) // "bauollehbau"
console.log(shorterReverseLonger("fghi",  "abcde")) // "fghiedcbafghi"