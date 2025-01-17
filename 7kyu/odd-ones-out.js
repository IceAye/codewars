// ❓ DESCRIPTION:
// The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!
//
// Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
//
// oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
// In the above example:
//
// the number 1 appears twice
// the number 2 appears once
// the number 3 appears three times
// 2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]
//
// Here are more examples:
//
// oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
// oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
// oddOnesOut([1, 2, 3]) = []
// oddOnesOut([1]) = []
// Are you up to the challenge?
//
// ✅ SOLUTION 1:
function oddOnesOut(nums) {
    let map = new Map()
    for (const num of nums) {
        map.set(num, map.get(num) + 1|| 1)
    }
    return nums.reduce((total, curr) => {
        if (map.get(curr) % 2 === 0) total.push(curr);
        return total;
    }, [])
}

// ✅ SOLUTION 2:
function oddOnesOut(nums) {
    let map = new Map()
    for (const num of nums) {
        map.set(num, map.get(num) + 1|| 1)
    }
    return nums.filter(num => map.get(num) % 2 === 0)
}

// 📌 TESTCASE:
console.log(oddOnesOut([1, 2, 3, 1, 3, 3])) // [1, 1]
console.log(oddOnesOut([75, 68, 75, 47, 68])) // [75, 68, 75, 68]
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])) // [67, 67]
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])) // [100, 100, 100, 100]
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])) // [44, 79, 50, 44, 79, 50]

