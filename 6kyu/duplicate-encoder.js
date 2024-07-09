function duplicateEncode(word) {

    return word.toLowerCase().split("").map((letter, i, w) => {
            return w.indexOf(letter) == w.lastIndexOf(letter) ? "(" : ")";
        }
    ).join("");
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("CodeWarrior"))