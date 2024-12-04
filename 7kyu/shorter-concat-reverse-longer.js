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

console.log(shorterReverseLonger("first", "abcde")) // "abcdetsrifabcde"
console.log(shorterReverseLonger("hello", "bau"  )) // "bauollehbau"
console.log(shorterReverseLonger("fghi",  "abcde")) // "fghiedcbafghi"