function fizzbuzz(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        let value = "";
        if (i % 3 === 0) value += "Fizz";
        if (i % 5 === 0) value += "Buzz";
        array.push(value || i);
    }
    return array;
}

console.log(fizzbuzz(15));
