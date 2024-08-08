const doubleChar = (str) => str.split("").map(item => item + item).join("");

console.log(doubleChar("abcd"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("%^&*("))