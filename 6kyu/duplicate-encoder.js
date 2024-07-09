function duplicateEncode(word) {

    return word.toLowerCase().split("").map((letter, i, w) => {
            return w.indexOf(letter) == w.lastIndexOf(letter) ? "(" : ")";
        }
    ).join("");
}