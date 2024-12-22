function numberOfPairs(gloves) {
    let hashmap = new Map();
    for (const glove of gloves) {
        hashmap.set(glove, hashmap.get(glove) + 1 || 1);
    }
    return [...hashmap.values()].map(pair => Math.floor(pair / 2)).reduce((acc, curr) => acc + curr, 0);
}

console.log(numberOfPairs(["red", "red"])); // 1
console.log(numberOfPairs(["red", "green", "blue"])); // 0
console.log(numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])); // 3