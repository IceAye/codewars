function passTheDoorMan(word){
    return (word.charCodeAt([...word].findIndex((char, ind) => char === word[ind + 1])) - 96) * 3;
}

console.log(passTheDoorMan("lettuce")) // 60
console.log(passTheDoorMan("hill")) // 36
console.log(passTheDoorMan("apple")) // 48