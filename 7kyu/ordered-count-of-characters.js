const orderedCount = function (text) {
    let map = new Map();
    for (let i = 0; i < text.length; i++) {
        map.set(text[i], map.get(text[i]) + 1 || 1)
    }
    return [...map.entries()];
}

console.log(orderedCount("abracadabra"))
console.log(orderedCount("Code Wars"))
console.log(orderedCount("233312"))