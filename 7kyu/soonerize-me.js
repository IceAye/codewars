function spoonerize(words) {
    let [word1, word2] = words.split(" ");

    function change(word1, word2) {
        return word2[0] + word1.slice(1);
    }

    return change(word1, word2) + " " + change(word2, word1);
}

function spoonerize(words) {
    let [word1, word2] = words.split(" ");
    [word1, word2] = [word2[0] + word1.slice(1), word1[0] + word2.slice(1)];
    return [word1, word2].join(" ")
}


console.log(spoonerize("nit picking")) // "pit nicking"
console.log(spoonerize("wedding bells")) // "bedding wells"
console.log(spoonerize("jelly beans")) // "belly jeans"