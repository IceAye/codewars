// ❓ DESCRIPTION:
// Remove all exclamation marks from the end of sentence.
//
// ✅ SOLUTION 1:
function remove (string) {
    let result = string
    while (result.endsWith("!")) {
        result = result.replace(/!$/, '')
    }
    return result
}

// ✅ SOLUTION 2:
function remove(s){
    return s.replace(/!+$/, '');
}