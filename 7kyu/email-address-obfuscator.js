// ❓ DESCRIPTION:
// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.
//
// ✅ SOLUTION:
obfuscate = function(email) {
    return email.replace(/@/, " [at] ").replace(/\./g, " [dot] ")
}

// 📌 TESTCASE:
console.log(obfuscate('test@123.com')) // 'test [at] 123 [dot] com'
console.log(obfuscate('Code_warrior@foo.ac.uk')) // 'Code_warrior [at] foo [dot] ac [dot] uk'
