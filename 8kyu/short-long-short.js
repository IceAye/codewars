// ❓ DESCRIPTION:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and
// the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
//
// ✅ SOLUTION:
function solution( a , b ) {
    return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution('45' , '1'))
console.log(solution('13' , '200'))
console.log(solution('Soon' , 'Me'))