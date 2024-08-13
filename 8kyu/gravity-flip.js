const flip=(d, a)=>{
    return (d === 'R') ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x)
}

console.log(flip('R', [4, 5, 6, 7, 1]))
console.log(flip('L', [3, 0, 9, 8, 1, 2]))
