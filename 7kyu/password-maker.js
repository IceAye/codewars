// ❓ DESCRIPTION:
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.
//
// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
//
// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
//
// ✅ SOLUTION 1:
function makePassword(phrase) {
    const cypher = {
        i: "1",
        o: "0",
        s: "5",
    };
    return phrase.split(" ").reduce((acc, curr) => {
        acc += cypher[curr[0].toLowerCase()] || curr[0];
        return acc;
    }, "");
}

// ✅ SOLUTION 2:
function makePassword(phrase) {
    return phrase
        .split(" ")
        .map((el) => el[0])
        .join("")
        .replace(/[iso]/gi, (x) => ({ i: 1, s: 5, o: 0 })[x.toLowerCase()]);
}

// 📌 TESTCASE:
console.log(makePassword("Give me liberty or give me death")); // "Gml0gmd"
console.log(makePassword("Keep Calm and Carry On")); // "KCaC0"