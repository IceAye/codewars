function XO(str) {
    let arr = str.toLowerCase().split('');
    return arr.filter((letter) => letter === 'x').length
        === arr.filter((letter) => letter === 'o').length;
}