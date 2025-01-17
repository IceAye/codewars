function repeatedOneString(str, number) {
    let oneFinalString = "";
    for (const char of str) {
        oneFinalString += char.repeat(number);
    }
    return oneFinalString;
}

function scale(strng, k, n) {
    if (strng === "") return "";
    let array = strng.split("\n");

    let result = [];

    for (const string of array) {
        let oneLongString = repeatedOneString(string, k);

        let i = 0;
        while (i < n) {
            result.push(oneLongString);
            i++;
        }
    }
    return result.join("\n");
}

let a = "abcd\nefgh\nijkl\nmnop";
let r =
    "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
console.log(scale(a, 2, 3)); // r
console.log(scale("", 5, 5)); // ""
console.log(scale("Kj\nSH", 1, 2)); // "Kj\nKj\nSH\nSH"
