const emoji = {
    ":)": 0,
    ":D": 1,
    ">(": 2,
    ">:C": 3,
    ":/": 4,
    ":|": 5,
    ":O": 6,
    ";)": 7,
    "^.^": 8,
    ":(": 9,
};

function deEmojify(emojiString) {

    return emojiString === "" ? "" : emojiString
        .split(" ")
        .map((item) => (item === "" ? " " : emoji[item]))
        .join("")
        .split(" ")
        .map((item) => String.fromCharCode(item))
        .join("");
}

console.log(deEmojify(":D :) :/  :D :) :|"));
console.log(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"));
console.log(deEmojify(":)"));
console.log(deEmojify(""));