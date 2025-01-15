// ❓ DESCRIPTION:
// In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.
// If there is an equal amount of bad and good actions, return 'naughty'
//
// ✅ SOLUTION:
function whatListAmIOn(actions) {
    let naughty = 0;
    let nice = 0;
    for (const action of actions) {
        if (
            action.startsWith("b") ||
            action.startsWith("f") ||
            action.startsWith("k")
        ) {
            naughty++;
        }
        if (
            action.startsWith("g") ||
            action.startsWith("s") ||
            action.startsWith("n")
        ) {
            nice++;
        }
    }
    return naughty >= nice ? "naughty" : "nice";
}

// 📌 TESTCASE:
const bad_actions = ["broke someone's window", "fought over a toaster", "killed a bug"],
    good_actions = ["got someone a new car", "saved a man from drowning", "never got into a fight"],
    actions = ["broke a vending machine", "never got into a fight", "tied someone's shoes"];
console.log(whatListAmIOn(bad_actions)) // "naughty"
console.log(whatListAmIOn(good_actions)) // "nice"
console.log(whatListAmIOn(actions)) // "naughty"