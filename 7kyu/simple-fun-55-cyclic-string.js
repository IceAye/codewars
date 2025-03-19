// ❓ DESCRIPTION:
// You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?
//
// ✅ SOLUTION:
function cyclicString(s) {
    let i = 1;

    while (!s.startsWith(s.slice(i))) {
        i++;
    }

    return i;
}

// 📌 TESTCASE:
console.log(cyclicString("cabca")) // 3
console.log(cyclicString("aba")) // 2
console.log(cyclicString("ccccccccccc")) // 1
console.log(cyclicString("abaca")) // 4
