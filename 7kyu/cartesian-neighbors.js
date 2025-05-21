function cartesianNeighbor(x, y){
    let result = [];
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (i === x && j === y) continue;
            result.push([i, j]);
        }
    }
    return result;
}

console.log(cartesianNeighbor(2,2)) // [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]
console.log(cartesianNeighbor(5,7)) // [(6,7),(6,6),(6,8),(4,7),(4,6),(4,8),(5,6),(5,8)]