// ❓ DESCRIPTION:
// A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.
//
// 📌 EXAMPLES:
// parseNumbers(['10']) // should return [10]
// parseNumbers(['-1','0','1']) // should return [-1,0,1]
//
// ✅ SOLUTION:
/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers
 */

const parseNumbers = function(intStrs) {
    return intStrs.map(el => parseInt(el));
}