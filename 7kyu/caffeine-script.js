function caffeineBuzz(n) {
    let string = "mocha_missing!";
    if (n % 3 === 0) string = "Java";
    if (n % 4 === 0 && n % 3 === 0) string = "Coffee";
    if (string !== "mocha_missing!" && n % 2 === 0) string += 'Script';
    return string;
}

console.log(caffeineBuzz(1)) // "mocha_missing!"
console.log(caffeineBuzz(3)) // "Java"
console.log(caffeineBuzz(6)) // "JavaScript"
console.log(caffeineBuzz(12)) // "CoffeeScript"