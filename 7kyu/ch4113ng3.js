// ❓ DESCRIPTION:
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
//
// ✅ SOLUTION 1:
function nerdify(txt) {
    let string = "";
    for (const char of txt) {
        if (/a/i.test(char)) {
            string += "4";
        } else if (/e/i.test(char)) {
            string += "3";
        } else if (/l/.test(char)) {
            string += "1";
        } else string += char;
    }
    return string;
}

// ✅ SOLUTION 2:
function nerdify(txt) {
    return txt.replace(/[aelAE]/g, char => ({'a': 4, 'e': 3, 'l':1 }[char.toLowerCase()]));
}

// 📌 TESTCASE:
console.log(nerdify("Fund4m3nt41s"), "Fund4m3nt41s");
console.log(nerdify("Seven"), "S3v3n");
console.log(nerdify("Los Angeles"), "Los 4ng313s");
console.log(nerdify("Seoijselawuue"), "S3oijs314wuu3");
