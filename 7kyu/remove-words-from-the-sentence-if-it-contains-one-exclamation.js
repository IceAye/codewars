// ❓ DESCRIPTION:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
//
// ✅ SOLUTION:
function remove(string) {
    return string
        .split(" ")
        .filter((el) => !/^[^!]*![^!]*$/.test(el))
        .join("");
}
