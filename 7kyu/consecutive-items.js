// ❓ DESCRIPTION:
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and
// b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).  It is
// guaranteed that a and b are both present in arr.
//
// ✅ SOLUTION:
function consecutive(arr , a , b) {
    let index = arr.indexOf(a);
    return arr[index + 1] === b || arr[index - 1] === b;
}

// 📌 TESTCASE:
console.log(consecutive([1 , 3 , 5 , 7] , 3 , 7)) // false
console.log(consecutive([1 , 3 , 5 , 7] , 3 , 1)) // true
console.log(consecutive([1 , 6 , 9 , -3 , 4 , -78 , 0] , -3 , 4)) // true
