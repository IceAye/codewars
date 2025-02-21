// ❓ DESCRIPTION:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
// ✅ SOLUTION 1:
function remove (string) {
    return string.replace(/!+/g, "") + "!"
}

// ✅ SOLUTION 2:
function remove (string) {
    return string.split("!").join("") + "!";
}