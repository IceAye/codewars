function arrAdder(arr) {
    let result = [];
    let i = 0;
    let maxLength = arr.reduce((acc, curr) => acc.length > curr.length ? acc.length : curr.length);
    while (i < maxLength) {
        let item = "";
        for (const str of arr) {
            item += str[i];
        }
        result.push(item.trim());
        i++;
    }
    return result.join(" ");
}

console.log(arrAdder([['J', 'L', 'L', 'M'], ['u', 'i', 'i', 'a'], ['s', 'v', 'f', 'n'], ['t', 'e', 'e', '']])) // "Just Live Life Man"
console.log(arrAdder([
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']
])) // "The Mitochondria is the powerhouse of the cell"