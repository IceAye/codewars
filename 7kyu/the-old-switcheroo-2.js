function encode(str) {
    return str.replace(/[a-z]/gi, c => c.toLowerCase().charCodeAt(0) - 96);
}

console.log(encode("abc", "123"));
console.log(encode("ABCD", "1234"));
console.log(encode("ZzzzZ", "2626262626"));
console.log(encode("abc-#@5", "123-#@5"));
