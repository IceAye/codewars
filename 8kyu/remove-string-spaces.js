// ❓ DESCRIPTION:
// Write a function that removes the spaces from the string, then return the resultant string.
//
// ✅ SOLUTION:
function noSpace(x){
    return x.split(' ').join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('jfBm  gk lf8hg  88lbe8 '))