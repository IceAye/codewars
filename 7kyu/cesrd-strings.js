// ❓ DESCRIPTION:
// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).
//
// Fortunately, I discovered that the virus hides my censored letters inside root directory.
//
// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.
//
// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"
// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"
// uncensor("xyz", "") ➜ "xyz"
// Notes
// Expect all discovered letters to be given in the correct order.
// Discovered letters will match the number of censored ones.
// Any character can be censored.

// ✅ SOLUTION:
function uncensor(infected, discovered) {
    if (discovered.length === 0) return  infected;
    let i = -1;
    return infected.replace(/\*/g, () => discovered[++i]);
}

// 📌 TESTCASE:
console.log(uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae')) // 'This is very strange'
console.log(uncensor('A**Z*N*', 'MAIG')) // 'AMAZING'
console.log(uncensor('xyz', '')) // 'xyz'