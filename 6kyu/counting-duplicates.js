function duplicateCount(text){
    let clearText = text.toLowerCase().split('')
    let letters = {}

    for (let i = 0; i < clearText.length; i++) {
        let item = clearText[i];
        letters[item] = letters[item] ? letters[item] + 1 : 1
    }

    let result = 0
    for (let value of Object.values(letters)) {
        value > 1 ? result += 1 : result
    }

    return result
}