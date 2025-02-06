function createArrayOfTiers(num) {
    let result = [];
    let string = "";
    for (const char of num.toString()) {
        string += char;
        result.push(string);
    }
    return result;
}

console.log(createArrayOfTiers(420)); // ["4", "42", "420"]
console.log(createArrayOfTiers(2017)); // ["2", "20", "201", "2017"]