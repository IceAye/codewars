// ❓ DESCRIPTION:
// Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.
// If the string's length is odd drop the central element.
//
// ✅ SOLUTION:
function charConcat(string){
    let middle = Math.floor(string.length / 2);
    let result = '';

    for (let i = 0; i < middle; i++) {
        result += string[i] + string.at(-1 - i) + (i + 1);
    }
    return result;
}

// 📌 TESTCASE:
console.log(charConcat("abc def")) // 'af1be2cd3'
console.log(charConcat("CodeWars")) // 'Cs1or2da3eW4'
