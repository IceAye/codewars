// ❓ DESCRIPTION:
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
//
// ✅ SOLUTION:
function solution(text, markers) {

    let array = text.split(/\n/);
    let stringMarkers = markers.map((marker) => {
        return marker.replace(/[-.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("");

    return array.map((item) => {
        return item.replace(new RegExp(`[${stringMarkers}].*`, 'g'), "").trimEnd();
    }).join("\n");
}

// 📌 TESTCASE:
console.log(solution("aa bb cc", [])); // 'aa bb cc'
console.log(solution("aa bb cc  ", [])); // 'aa bb cc'
console.log(solution("  aa bb cc", [])); // '  aa bb cc'
console.log(solution("  aa # bb # cc  ", [])); // '  aa # bb # cc'
console.log(solution("aa bb cc", ["#"])); // 'aa bb cc'
console.log(solution("aa bb # cc", ["#"])); // 'aa bb'
console.log(solution("aa# bb cc", ["#"])); // 'aa'
console.log(solution("aa #bb cc", ["#"])); // 'aa'
console.log(solution("aa # bb # cc", ["#"])); // 'aa'
console.log(solution("#aa bb cc", ["#"])); // ''
console.log(solution("#aa bb\ncc dd", ["#"])); // '\ncc dd'
console.log(solution("aa # bb\ncc dd", ["#"])); // 'aa\ncc dd'
console.log(solution("aa bb\n#cc dd", ["#"])); // 'aa bb\n'
console.log(solution("aa bb\ncc # dd", ["#"])); //'aa bb\ncc'
console.log(solution("aa bb\ncc dd#", ["#"])); // 'aa bb\ncc dd'
console.log(solution("aa bb\ncc dd", ["#", "!"])); // 'aa bb\ncc dd'
console.log(solution("aa # bb\ncc dd", ["#", "!"])); // 'aa\ncc dd'
console.log(solution("aa bb\ncc ! dd", ["#", "!"])); // 'aa bb\ncc'
console.log(solution("#aa bb\n!cc dd", ["#", "!"])); // '\n'
console.log(solution("aa ! bb\ncc # dd", ["#", "!"])); // 'aa\ncc'
console.log(solution("aa bb#\ncc dd!", ["#", "!"])); // 'aa bb\ncc dd'
console.log(solution("aa + bb\ncc - dd\nee * ff", ["+", "-", "*"])); // 'aa\ncc\nee'
console.log(solution("aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"])); // 'aa\ncc\nee'