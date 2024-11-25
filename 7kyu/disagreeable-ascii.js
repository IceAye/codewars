// ❓ DESCRIPTION:
// You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.
// To find who has the 'weightier' name you will switch all the values.
// For example Joe will have a weight of 254, instead of 286 using normal ascii values.
//
// ✅ SOLUTION:
function getWeight(name){
    return [...name].reduce((acc, curr)=> acc + (/[a-z]/.test(curr) ? curr.charCodeAt(0) - 32 : /[A-Z]/.test(curr) ? curr.charCodeAt(0) + 32 : 0), 0);
}

// 📌 TESTCASE:
console.log(getWeight("Joe")) // 254
console.log(getWeight("CJ")) // 205
console.log(getWeight("cj")) // 141
console.log(getWeight("111100")) // 4
