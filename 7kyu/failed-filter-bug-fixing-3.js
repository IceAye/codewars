// ❓ DESCRIPTION:
// Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the
// numbers from the string.
//
// ✅ SOLUTION:
let FilterNumbers = function ( str ) {
    return str.split('').filter(c => isNaN(c)).join('');
}

console.log(FilterNumbers("test123"));
console.log(FilterNumbers("a1b2c3"));
console.log(FilterNumbers("aa1bb2cc3dd0"));
console.log(FilterNumbers('beecdead0fddaebd0'));
