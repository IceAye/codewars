function hasLoop(indices) {
    const points = new Set([0]);
    const boundary = indices.length;

    if (boundary === 0) return false;

    let currentIndex = indices[0];
    while (true) {
        if (currentIndex >= boundary) return false;
        if (points.has(currentIndex)) return true;
        points.add(currentIndex);
        currentIndex = indices[currentIndex];
    }
}

console.log(hasLoop([1, 2, 3, 4, 2]), true, `hasLoop([1,2,3,4,2])`);
console.log(hasLoop([1, 2, 3, 4, 5]), false, `hasLoop([1,2,3,4,5])`);
console.log(hasLoop([0]), true, `hasLoop([0])`);
console.log(hasLoop([3, 2, 1, 6]), false, `hasLoop([3,2,1,6])`);
console.log(hasLoop([1, 0]), true, `hasLoop([1,0])`);
console.log(hasLoop([3, 2, 1, 4]), false, `hasLoop([3,2,1,4])`);
console.log(hasLoop([2, 0, 1, 5]), true, `hasLoop([2,0,1,5])`);
console.log(hasLoop([]), false, `hasLoop([])`);
console.log(hasLoop([4,3,1,8,5,0,2,9]), true, `hasLoop([4,3,1,8,5,0,2,9]`);
