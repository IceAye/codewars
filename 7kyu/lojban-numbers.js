function convertLojban(lojban) {
    const codeMap = {
        'pa': '1',
        're': '2',
        'ci': '3',
        'vo': '4',
        'mu': '5',
        'xa': '6',
        'ze': '7',
        'bi': '8',
        'so': '9',
        'no': '0'
    };

    return +lojban.match(/(.){2}/g).reduce((acc, curr) => acc + codeMap[curr], "");
}

console.log(convertLojban('pareci'), 123)
console.log(convertLojban('renonore'), 2002)