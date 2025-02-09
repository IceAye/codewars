// ❓ DESCRIPTION:
// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.
// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.
// You will be receiving values higher than 10, all valid.
// Enjoy it!!
//
// ✅ SOLUTION:
function nextPal(val) {
    let i = val + 1;
    while (i !== +Array.from(i.toString()).reverse().join("")) {
        i++;
    }
    return i;
}

// 📌 TESTCASE:
console.log(nextPal(11)); // 22
console.log(nextPal(188)); // 191
console.log(nextPal(191)); // 202
console.log(nextPal(2541)); // 2552
