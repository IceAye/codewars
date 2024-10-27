// ❓ DESCRIPTION:
// Your task is to add up letters to one letter.
// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
//
// ✅ SOLUTION:
function addLetters(...letters) {
    const abc = "0abcdefghijklmnopqrstuvwxyz";
    let count = letters.reduce((acc, curr) => acc + abc.indexOf(curr), 0)
    while (count > 26)  count -= 26
    return count ? abc.charAt(count) : "z"
}

// ✅ SOLUTION 2:

function addLetters(...letters) {
    return String.fromCharCode((letters.reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0) + 25) % 26 + 97);
}

// 📌 TESTCASE:
console.log(addLetters(['a', 'b', 'c'])) // 'f'
console.log(addLetters(['z'])) // 'z'
console.log(addLetters(['a', 'b'])) // 'c'
console.log(addLetters(['c'])) // 'c'
console.log(addLetters(['z', 'a'])) // 'a'
console.log(addLetters(['y', 'c', 'b'])) // 'd'
console.log(addLetters([])) // 'z