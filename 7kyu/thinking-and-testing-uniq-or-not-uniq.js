// ❓ DESCRIPTION:
// No Story
// No Description
// Only by Thinking and Testing
// Look at result of testcase, guess the code!
//
// ✅ SOLUTION:
function testit(a,b){
    return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}