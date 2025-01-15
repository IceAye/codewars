function noonerize(numbers) {
    if (typeof numbers[0] !== "number" || typeof numbers[1] !== "number") {
        return "invalid array";
    }
    let string1 = numbers[0].toString();
    let string2 = numbers[1].toString();

    let num1 = string2[0] + string1.slice(1);
    let num2 = string1[0] + string2.slice(1);

    return Math.abs(num1 - num2);
}

console.log(noonerize([12, 34])); // 18
console.log(noonerize([55, 63])); // 12
console.log(noonerize([357, 579])); // 178
console.log(noonerize([1000000, 9999999])); // 7000001