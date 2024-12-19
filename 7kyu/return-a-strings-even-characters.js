function evenChars(string) {
    if (string.length < 2 || string.length > 100) return "invalid string";

    let result = [];
    for (let i = 1; i < string.length; i++) {
        if (i % 2 === 1) result.push(string[i]);
    }
    return result;
}

console.log(evenChars ("1234")) // ["2", "4"]
console.log(evenChars (";;;--")) // [";", "-"]
console.log(evenChars ("abcdefghijklm")) // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva")) // "invalid string"
console.log(evenChars ("a")) // "invalid string"
console.log(evenChars ("")) // "invalid string"