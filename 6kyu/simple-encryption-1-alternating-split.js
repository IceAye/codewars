function encrypt(text, n) {
    function reverse(text) {
        let [even, odd] = [...text].reduce(
            (acc, curr, currentIndex) => {
                acc[currentIndex % 2] += curr;
                return acc;
            },
            ["", ""],
        );
        return [odd, even].join("");
    }

    if (n <= 0 || text === null) return text;
    if (n === 1) return reverse(text);
    return encrypt(reverse(text), n - 1);
}

function decrypt(encryptedText, n) {
    function dereverse(encryptedText) {
        let odd = encryptedText.slice(0, encryptedText.length/2);
        let even = encryptedText.slice(encryptedText.length/2);
        let text = "";
        for (let i = 0; i < odd.length; i++) {
            text += even[i] + odd[i];
        }
        return text.length === encryptedText.length ? text : text + even.at(-1)
    }

    if (n <= 0 || encryptedText === null) return encryptedText;
    if (n === 1) return dereverse(encryptedText);
    return decrypt(dereverse(encryptedText), n - 1)
}

console.log(encrypt("This is a test!", 1)); // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)); // "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)); // " Tah itse sits!"
console.log(encrypt("This is a test!", -1)); // "This is a test!"
console.log(encrypt("This is a test!", 4)); // "This is a test!"
console.log(encrypt(null, 0)); // "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)); // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)); // "This is a test!"
console.log(decrypt(" Tah itse sits!", 3)); // "This is a test!"
console.log(decrypt("This is a test!", -1)); // "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); // "This kata is very interesting!"
console.log(decrypt(null, 0)); // "This kata is very interesting!"
