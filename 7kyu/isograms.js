// ❓ DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// 📌 EXAMPLE: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//
// ✅ SOLUTION:
function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}