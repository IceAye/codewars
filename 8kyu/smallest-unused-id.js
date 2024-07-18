// ❓ DESCRIPTION:
// Hey awesome programmer!
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs,
// but you don't have to find or remove them!
// Go on and code some pure awesomeness!
//
// ✅ SOLUTION:
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