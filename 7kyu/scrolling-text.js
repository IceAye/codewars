
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

function scrollingText(text) {
    let result = [];

    for (let i = 0; i < text.length; i++) {
        result.push((text.slice(i) + text.slice(0, i)).toUpperCase());
    }

    return result;
}

console.log(scrollingText("abc")); // ["ABC","BCA","CAB"]
console.log(scrollingText("codewars"));
// [ "CODEWARS","ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA","SCODEWAR" ]