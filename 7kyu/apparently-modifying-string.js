// ❓ DESCRIPTION:
// For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).
// If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.
// If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).
// An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.
//
// ✅ SOLUTION:
function apparently(string) {
    return string.replace(/(and|but\b)(?!\sapparently\b)/g, "$1 apparently");
}

// 📌 TESTCASE:
console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.')) // 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.'
console.log(apparently('and')) // 'and apparently'
console.log(apparently('apparently')) // 'apparently'
console.log(apparently('but apparently')) // 'but apparently'