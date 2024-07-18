function nextId(ids){
    let array = [...new Set(ids)].sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        if (array[i] + 1 !== array[i + 1] && array.includes(0)) {
            return  array[i] + 1
        }
    }
    return 0
}

console.log(nextId([5,1,2,3,5]))
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))