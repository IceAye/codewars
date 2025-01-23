function dominator(arr) {
    let half = Math.floor(arr.length / 2);

    let frequence = new Map();

    for (const num of arr) {
        frequence.set(num, frequence.get(num) + 1 || 1);
        if (frequence.get(num) > half) return num;
    }

    return -1;
}


console.log(dominator([3,4,3,2,3,1,3,3])) // 3
console.log(dominator([1,2,3,4,5])) // -1
console.log(dominator([1,1,1,2,2,2])) // -1
console.log(dominator([1,1,1,2,2,2,2])) // 2
