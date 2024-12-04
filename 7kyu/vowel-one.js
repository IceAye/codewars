function vowelOne(s) {
    let result = "";
    for (const char of s) {
        /[euioa]/i.test(char) ? (result += "1") : (result += "0");
    }
    return result;
}

function vowelOne(s){
    return s.replace(/[^aeiou]/gi, "0").replace(/[^\d]/g, "1");
}

console.log( vowelOne( "vowelOne" )) // "01010101"
console.log( vowelOne( "123, arou" )) // "000001011"