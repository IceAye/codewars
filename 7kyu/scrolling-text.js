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

console.log(scrollingText("abc")); // ["ABC","BCA","CAB"]
console.log(scrollingText("codewars"));
// [ "CODEWARS","ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA","SCODEWAR" ]