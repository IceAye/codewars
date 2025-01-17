function solve(s){
    const abc = "abcdefghijklmnopqrstuvwxyz";

    const consecutiveString = [...s].sort().join("");

    return abc.includes(consecutiveString);
}

console.log(solve("abc")) //true
console.log(solve("abd")) //false
console.log(solve("dabc")) //true
console.log(solve("abbc")) //false