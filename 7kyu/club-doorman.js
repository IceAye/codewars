function passTheDoorMan(word) {
    return (word.charCodeAt([...word].findIndex((char , ind) => char === word[ind + 1])) - 96) * 3;
}

function passTheDoorMan(word) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letter;
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] === word[i + 1]) {
            letter = word[i];
        }
    }
    return (alphabet.indexOf(letter) + 1) * 3
}

console.log(passTheDoorMan("lettuce")) // 60
console.log(passTheDoorMan("hill")) // 36
console.log(passTheDoorMan("apple")) // 48