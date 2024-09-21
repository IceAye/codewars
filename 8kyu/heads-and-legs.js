function animals(heads, legs){
    let cows = legs/2 - heads;
    let chickens = heads - cows
    if (heads <= 0 || legs <= 0 || chickens <= 0 || cows <= 0 || !Number.isInteger(cows) || !Number.isInteger(chickens)) return "No solutions"
    return [chickens, cows]
}

console.log(animals(72, 200));
console.log(animals(116, 282));
console.log(animals(12, 24));
console.log(animals(0, 500));

