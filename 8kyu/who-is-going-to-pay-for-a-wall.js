function whoIsPaying(name) {
    return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

console.log(whoIsPaying("Mexico"));
console.log(whoIsPaying("Melania"));
console.log(whoIsPaying("Me"));
console.log(whoIsPaying("I"));
console.log(whoIsPaying(""));
