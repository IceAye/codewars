// ❓ DESCRIPTION:
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
//
// ✅ SOLUTION:
function toUnderscore(string) {
    return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
}

// 📌 TESTCASE:
console.log(toUnderscore('A123aaa123AAA123')) // 'a123aaa123_a_a_a123'
console.log(toUnderscore('AAA')) // 'a_a_a'
console.log(toUnderscore('TestController')) // 'test_controller'
console.log(toUnderscore('ThisIsBeautifulDay')) // 'this_is_beautiful_day'
console.log(toUnderscore('Am7Days', 'am7_days')) // 'Am7Days should equals am7_days'
console.log(toUnderscore('My3CodeIs4TimesBetter')) // 'my3_code_is4_times_better'
console.log(toUnderscore(5)) // '5'