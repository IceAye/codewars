function groupByCommas(n) {
    return n.toLocaleString();
}

console.log(groupByCommas(1), "1");
console.log(groupByCommas(12), "12");
console.log(groupByCommas(123), "123");
console.log(groupByCommas(1234), "1,234");
console.log(groupByCommas(12345), "12,345");
console.log(groupByCommas(123456), "123,456");
console.log(groupByCommas(1234567), "1,234,567");
console.log(groupByCommas(12345678), "12,345,678");
console.log(groupByCommas(123456789), "123,456,789");
console.log(groupByCommas(1234567890), "1,234,567,890");
console.log(groupByCommas(2147483647), "2,147,483,647");
console.log(groupByCommas(0), "0");