function twoHighest(arr) {
    let set = new Set(arr)
    return [...set].sort((a, b) => b - a).slice(0,2)
}

console.log(twoHighest([15]))
console.log(twoHighest([15, 20, 20, 17]))