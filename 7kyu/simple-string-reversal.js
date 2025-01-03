function solve(str) {
    let arr = [...str.split(` `).join(``)];
    return str.replace(/\S/g, () => arr.pop());
}

console.log(solve("codewars")); // "srawedoc"
console.log(solve("your code")); // "edoc ruoy"
console.log(solve("your code rocks")); // "skco redo cruoy"
console.log(solve("i love codewars")); // "s rawe docevoli"