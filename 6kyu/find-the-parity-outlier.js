// ❓ DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// 📌 EXAMPLES:
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
//
// ✅ SOLUTION:

function findOutlier( integers ) {
    let numberEven = []
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 !== 0) {
            numberEven.push(integers[i]);
        }
    }

    let numberOdd = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            numberOdd.push(integers[i]);
        }
    }

    return numberOdd.length !== 1 ? +numberEven : +numberOdd;
}

console.log(findOutlier([0 , 1 , 2]))
console.log(findOutlier([2 , 6 , 8 , 10 , 3]))
console.log(findOutlier([2 , 6 , 8 , 200 , 700 , 1 , 84 , 10 , 4]))