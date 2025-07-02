// ❓ DESCRIPTION:
// You have to create a function named reverseIt.
// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.
//
// ✅ SOLUTION:
function reverseIt(data){
    if (typeof data === 'string') return [...data].reverse().join('');
    if (typeof data === 'number') return +[...data.toString()].reverse().join('');
    return data;
}

// 📌 TESTCASE:
console.log(reverseIt('Hello'), "olleH")
console.log(reverseIt(314159), 951413)
console.log(reverseIt("314159"), "951413")
console.log(reverseIt([]), [])
console.log(reverseIt([1, 2, 3]), [1, 2, 3])
console.log(reverseIt( 488.4071315354262), 2624535131704.884)