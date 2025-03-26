const words = {
    6: "a",
    1: "b",
    7: "d",
    4: "e",
    3: "i",
    2: "l",
    9: "m",
    8: "n",
    0: "o",
    5: "t",
};

function hiddenWord(num) {
    let result = "";
    let digits = num.toString().split("");
    for (const digit of digits) {
        result += words[digit];
    }
    return result;
}

function hiddenWord(num) {
    return num.toString().replace(/\d/g, char => 'oblietadnm'[char]);
}

console.log(hiddenWord(637)) // "aid"
console.log(hiddenWord(7415)) // "debt"
console.log(hiddenWord(49632)) // "email"
console.log(hiddenWord(942547)) // "melted"
