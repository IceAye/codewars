function decipherThis(str) {
    return str
        .split(" ")
        .map((string) => {
            const numMatch = string.match(/\d+/);
            const firstChar = String.fromCharCode(parseInt(numMatch[0]));
            const letters = string.slice(numMatch[0].length);

            let newWord = firstChar;

            if (letters.length > 0) {
                if (letters.length === 1) {
                    newWord += letters;
                } else {
                    const secondChar = letters[0];
                    const lastChar = letters[letters.length - 1];
                    const middle = letters.slice(1, -1);
                    newWord += lastChar + middle + secondChar;
                }
            }

            return newWord;
        })
        .join(" ");
}

function decipherThis(str) {
    return str
        .split(" ")
        .map(string =>string.replace(/\d+/, char => String.fromCharCode(char)).replace(/(.)(.)(.*)(.)/, '$1$4$3$2' ))
        .join(" ");
}

console.log(decipherThis("72olle 103doo 100ya")); // 'Hello good day'
console.log(decipherThis("82yade 115te 103o")); // 'Ready set go'
console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")); // 'Have a go at this and see how you do'
console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")); // 'A wise old owl lived in an oak'
console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")); // 'The more he saw the less he spoke'
console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")); // 'The less he spoke the more he heard'
console.log(decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")); // 'Why can we not all be like that wise old bird'
console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")); // 'Thank you Piotr for all your help'
