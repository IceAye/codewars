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

const bad_actions = ["broke someone's window", "fought over a toaster", "killed a bug"],
    good_actions = ["got someone a new car", "saved a man from drowning", "never got into a fight"],
    actions = ["broke a vending machine", "never got into a fight", "tied someone's shoes"];
console.log(whatListAmIOn(bad_actions)) // "naughty"
console.log(whatListAmIOn(good_actions)) // "nice"
console.log(whatListAmIOn(actions)) // "naughty"