function findLineup(distances) {
    if (distances.length === 1) {
        return distances[0] === 0 ? [1] : [];
    }
    const lineup = [...distances].sort((a, b) => a - b);
    const result = [];

    for (let i = 1; i < lineup.length; i++) {
        if (lineup[i] !== (lineup[i - 1] + 1)) return [];
        result.push(distances.indexOf(lineup[i - 1]) + 1);
        if (i === distances.length - 1) result.push(distances.indexOf(lineup[i]) + 1);
    }
    return result;
}

console.log(findLineup([1, 2, 0])); // [3, 1, 2]
console.log(findLineup([1, 4, 2, 6, 8, 0, 5, 7, 3])); // [6, 1, 3, 9, 2, 7, 4, 8, 5]
console.log(findLineup([0])); // [1]
console.log(findLineup([1])); // []
console.log(findLineup([1, 0, 1])); // []
console.log(findLineup([1, 2, 0, 4])); // []
