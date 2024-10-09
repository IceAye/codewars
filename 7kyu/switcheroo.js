function switcheroo(x){
    return x.replaceAll(/[ab]/g, c => c === "a" ? "b" : "a");
}

console.log(switcheroo('abc'))
console.log(switcheroo('aaabcccbaaa'))
console.log(switcheroo('ccccc'))
