function mutateMyStrings(stringOne, stringTwo) {
    let result = [];
    let word = [...stringOne];
    for (let i = 0; i < stringOne.length; i++) {
        if (word[i] !== stringTwo[i]) {
            word[i] = stringTwo[i];
            result.push(word.join("") + "\n");
        }
    }
    return stringOne + "\n" + result.join("");
}

console.log(mutateMyStrings("bubble gum", "turtle ham"));
// 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n'
