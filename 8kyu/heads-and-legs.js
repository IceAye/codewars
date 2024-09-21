// ❓ DESCRIPTION:
// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:
// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”
// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.
// There are many different ways to solve this, but they all give the same answer.
// You will only be given integers types - however negative values (edge cases) will be given.
// Happy coding!
//
// ✅ SOLUTION:
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

