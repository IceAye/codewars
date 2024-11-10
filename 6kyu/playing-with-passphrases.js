function playPass(s, n) {
    return s
        .replace(/[A-Z]/g, c =>  String.fromCharCode(((c.charCodeAt(0) + n - 65) % 26) + 65))
        .replace(/\d/g, d => 9 - d)
        .split("")
        .map((item, index) => (index % 2 ? item.toLowerCase() : item))
        .reverse()
        .join("");
}

console.log(playPass("BORN IN 2015!", 1)); // "!4897 Oj oSpC"
console.log(playPass("I LOVE YOU!!!", 1)); // "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)); // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"