function incrementer(nums) {
    if (nums.length === 0) return nums;
    return nums.map((item, index) => (item + index + 1) % 10);
}


console.log(incrementer([])) // []
console.log(incrementer([1, 2, 3])) // [2, 4, 6]
console.log(incrementer([4, 6, 7, 1, 3])) // [5, 8, 0, 5, 8]
console.log(incrementer([3, 6, 9, 8, 9])) // [4, 8, 2, 2, 4]