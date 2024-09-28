// ❓ DESCRIPTION:
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.
//
// ✅ SOLUTION:
function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

// 📌 TESTCASE:
console.log(generateLink('matt c'));
console.log(generateLink('g964'));
console.log(generateLink('colbydauph'));