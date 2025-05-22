function decode(code, key) {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let numbers = Array.from(key.toString(), Number);

    let result = "";
    for (let i = 0; i < code.length; i++) {
        result += abc[code[i] - numbers[i % numbers.length] - 1];
    }
    return result;
}


console.log( decode([ 20, 12, 18, 30, 21], 1939), "scout" );
console.log( decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939) , "masterpiece");
