// ❓ DESCRIPTION:
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
//
// 📌 EXAMPLES:
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
//
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.
//
// ✅ SOLUTION:
function flickSwitch(arr){
    let flick = true
    return arr.map(item => (item === 'flick') ? flick = !flick : flick)
}
console.log('Output: ' , flickSwitch(["codewars", "flick", "code", "wars"]))
console.log('Output: ' , flickSwitch(["flick", "chocolate", "adventure", "sunshine"]))
console.log('Output: ' , flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))
