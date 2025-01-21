// ❓ DESCRIPTION:
// Let's create some scrolling text!
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
// ✅ SOLUTION 1:
function scrollingText(text) {
    text = text.toUpperCase();

    let result = [text];

    let i = 0;
    while (i < text.length - 1) {
        text = text.slice(1) + text[0];
        result.push(text);
        i++;
    }

    return result;
}

// ✅ SOLUTION 2:
function scrollingText(text) {
    let result = [];

    for (let i = 0; i < text.length; i++) {
        result.push((text.slice(i) + text.slice(0, i)).toUpperCase());
    }

    return result;
}

// 📌 TESTCASE:
console.log(scrollingText("abc")); // ["ABC","BCA","CAB"]
console.log(scrollingText("codewars"));
// [ "CODEWARS","ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA","SCODEWAR" ]