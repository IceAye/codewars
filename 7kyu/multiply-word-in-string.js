function modifyMultiply(str, loc, num) {
    return new Array(num).fill(str.split(" ")[loc]).join("-");
}

console.log(modifyMultiply("This is a string", 3, 5)); // 'string-string-string-string-string'