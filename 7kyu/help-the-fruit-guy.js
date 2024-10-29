function removeRotten(bagOfFruits) {
    return bagOfFruits ? bagOfFruits.map(item => /rotten/g.test(item) ? item.replace(/rotten/g, "").toLowerCase() : item) : []
}

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"])); // ["apple","banana","kiwi","melone","orange"]
console.log(removeRotten(["apple","rottenBanana","apple"])); // ["apple","banana","apple"]
console.log(removeRotten([])); // []
