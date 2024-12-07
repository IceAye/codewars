function nicknameGenerator(name) {
    if (name.length < 4) return "Error: Name too short";
    return /[euioa]/g.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}

console.log(nicknameGenerator("Jimmy")) // "Jim"
console.log(nicknameGenerator("Samantha")) // "Sam"
console.log(nicknameGenerator("Sam")) // "Error: Name too short"
console.log(nicknameGenerator("Kayne")) // "Kay", "'y' is not a vowel"
console.log(nicknameGenerator("Melissa")) // "Mel"
console.log(nicknameGenerator("James")) // "Jam"