function vowelOne(s) {
    let result = "";
    for (const char of s) {
        /[euioa]/i.test(char) ? (result += "1") : (result += "0");
    }
    return result;
}

console.log( vowelOne( "vowelOne" )) // "01010101"
console.log( vowelOne( "123, arou" )) // "000001011"