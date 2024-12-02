function solve(arr) {
    let map = new Map();
    arr.map((item) => map.set(item , map.get(item) + 1 || 1));
    const sorted = [...map.entries()]
        .sort((a , b) => b[1] - a[1] || a[0] - b[0]);
    let result = [];
    for (const [number, frequency] of sorted) {
        let i = 0;
        while (i < frequency) {
            result.push(number);
            i++;
        }
    }
    return result;
}

function solve(arr) {
    let map = new Map();
    arr.map((item) => map.set(item , map.get(item) + 1 || 1));
    return arr.sort((a,b) => map.get(b) - map.get(a) || a - b);
}

console.log(solve([2,3,5,3,7,9,5,3,7])) // [3,3,3,5,5,7,7,2,9]
console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1])) // [1,1,1,0,0,6,6,8,8,2,3,5,9]
console.log(solve([5,9,6,9,6,5,9,9,4,4])) // [9,9,9,9,4,4,5,5,6,6]
console.log(solve([4,4,2,5,1,1,3,3,2,8])) // [1,1,2,2,3,3,4,4,5,8]
console.log(solve([4,9,5,0,7,3,8,4,9,0])) // [0,0,4,4,9,9,3,5,7,8]
console.log(solve([3,3,4,4,7,7,9,9,9,15,16,16,17,18,23,24,26,27,27,27,28,28,29,29,32,35,45,46,47])) //