function spoonerize(words) {
    let [word1, word2] = words.split(" ");

    function change(word1, word2) {
        return word2[0] + word1.slice(1);
    }

    return change(word1, word2) + " " + change(word2, word1);
}

console.log(spoonerize("nit picking")) // "pit nicking"
console.log(spoonerize("wedding bells")) // "bedding wells"
console.log(spoonerize("jelly beans")) // "belly jeans"