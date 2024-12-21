function validSpacing(s) {
    return s.replace(/\s+/g, " ").trim() === s;
}

console.log(validSpacing('Hello world')) // true
console.log(validSpacing(' Hello world')) // false
console.log(validSpacing('Hello  world ')) // false
console.log(validSpacing('Hello')) // true
console.log(validSpacing('Helloworld')) // true
console.log(validSpacing('Hello  world')) // false