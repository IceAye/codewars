function moveTen(s) {
    const abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    return s.replace(/./g, (c) => abc[abc.indexOf(c) + 10]);
}

console.log(moveTen("testcase")); // "docdmkco"
console.log(moveTen("codewars")); // "mynogkbc"
console.log(moveTen("exampletesthere")); // "ohkwzvodocdrobo"
